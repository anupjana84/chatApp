
import MainRoute from './Routes/MainRoute'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
const queryClient = new QueryClient(
  {
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  }
)
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <MainRoute/>
    </QueryClientProvider>
  )
}

export default App