import axios from 'axios'
import { formatLaunchDate } from '../util/formatLaunchDate'

export const useFetchPastLaunches = (setPastLaunces) => {
  const load = async () => {
    try {
      const pastLaunches = (await axios.get('/past-launches')).data
      const formattedPastLaunches = pastLaunches.map(formatLaunchDate)
      setPastLaunces(formattedPastLaunches)
    } catch (error) {
      alert('algo deu errado')
    }
  }
  return () => load()
}