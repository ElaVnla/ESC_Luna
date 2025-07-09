import { JarallaxOptions, JQuery } from 'jarallax'

declare module 'jarallax' {
  export function jarallaxVideo(): void

  export function jarallax(elements: Element | Element[] | NodeListOf<Element> | JQuery<Element>, userOptions: JarallaxOptions): void

  export function jarallax(
    elements: Element | Element[] | NodeListOf<Element> | JQuery<Element>,
    methodName: 'destroy' | 'onResize' | 'onScroll',
  ): void

  export function jarallax(elements: Element | Element[] | NodeListOf<Element> | JQuery<Element>, methodName: 'isVisible'): boolean
}
