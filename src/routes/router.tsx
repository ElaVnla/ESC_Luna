import { AdminLayout, AgentLayout, AuthLayout, DefaultLayout, HelpLayout, UserLayout } from '@/layouts'
import { adminRoutes, agentRoutes, appRoutes, authRoutes, helpRoutes, userRoutes } from '@/routes/index'
import { useAuthContext } from '@/states'
import { Navigate, Route, Routes, type RouteProps } from 'react-router-dom'

const AppRouter = (props: RouteProps) => {
  const { isAuthenticated } = useAuthContext()

  return (
    <Routes>
      {(appRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<DefaultLayout {...props}>{route.element}</DefaultLayout>} />
      ))}

      {(authRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<AuthLayout {...props}>{route.element}</AuthLayout>} />
      ))}

      {(helpRoutes || []).map((route, idx) => (
        <Route key={idx + route.name} path={route.path} element={<HelpLayout {...props}>{route.element}</HelpLayout>} />
      ))}

      {(userRoutes || []).map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={
            isAuthenticated ? (
              <UserLayout {...props}>{route.element}</UserLayout>
            ) : (
              <Navigate
                to={{
                  pathname: '/auth/sign-in',
                  search: 'redirectTo=' + route.path,
                }}
              />
            )
          }
        />
      ))}

      {(agentRoutes || []).map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={
            isAuthenticated ? (
              <AgentLayout {...props}>{route.element}</AgentLayout>
            ) : (
              <Navigate
                to={{
                  pathname: '/auth/sign-in',
                  search: 'redirectTo=' + route.path,
                }}
              />
            )
          }
        />
      ))}

      {(adminRoutes || []).map((route, idx) => (
        <Route
          key={idx + route.name}
          path={route.path}
          element={
            isAuthenticated ? (
              <AdminLayout {...props}>{route.element}</AdminLayout>
            ) : (
              <Navigate
                to={{
                  pathname: '/auth/sign-in',
                  search: 'redirectTo=' + route.path,
                }}
              />
            )
          }
        />
      ))}
    </Routes>
  )
}

export default AppRouter
