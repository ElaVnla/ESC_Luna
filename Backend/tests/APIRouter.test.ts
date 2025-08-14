// tests/APIRouter.test.ts

import request from 'supertest'
import express from 'express'
import { vi, describe, it, expect, beforeEach } from 'vitest'

// Mock global fetch before importing the router
global.fetch = vi.fn()

import router from '../src/routes/APIRouter'


// @Column({ type: "varchar", length: 255 })
// name!: string;

const app = express()
app.use('/api', router)

describe('APIRouter', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('GET /api/hotels/:id', () => {
    it('returns hotel data on success', async () => {
      ;(fetch as any).mockResolvedValueOnce({
        json: async () => ({ id: '123', name: 'Test Hotel' })
      })

      const res = await request(app).get('/api/hotels/123')

      expect(res.status).toBe(200)
      expect(res.body).toEqual({ id: '123', name: 'Test Hotel' })
      expect(fetch).toHaveBeenCalledWith(
        'http://hotelapi.loyalty.dev/api/hotels/123'
      )
    })

    it('handles fetch errors', async () => {
      ;(fetch as any).mockRejectedValueOnce(new Error('Network down'))

      const res = await request(app).get('/api/hotels/123')

      expect(res.status).toBe(500)
      expect(res.body.error).toBe('Failed to fetch hotel data')
    })
  })

  describe('GET /api/hotels/:id/price', () => {
    it('polls until completed = true', async () => {
      // First call: not completed
      ;(fetch as any).mockResolvedValueOnce({
        json: async () => ({ completed: false })
      })
      // Second call: completed
      ;(fetch as any).mockResolvedValueOnce({
        json: async () => ({ completed: true, price: 200 })
      })

      const res = await request(app)
        .get('/api/hotels/123/price?destination_id=456&checkin=2025-01-01&checkout=2025-01-02')

      expect(res.status).toBe(200)
      expect(res.body.completed).toBe(true)
      expect(res.body.price).toBe(200)
      expect(fetch).toHaveBeenCalledTimes(2) // polled twice
    })

    it('returns error if fetch throws', async () => {
      ;(fetch as any).mockRejectedValueOnce(new Error('API down'))

      const res = await request(app)
        .get('/api/hotels/123/price?destination_id=456&checkin=2025-01-01&checkout=2025-01-02')

      expect(res.status).toBe(500)
      expect(res.body.error).toBe('Failed to fetch hotel data')
    })
  })
})
