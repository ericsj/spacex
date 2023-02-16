import axios from 'axios'
import { formatLaunchDate } from '../util/formatLaunchDate'

export const useFetchUpcomingLaunches = (setUpcomingLaunches) => {
  const load = async () => {
    try {
      const upcomingLaunches = (await axios.get('/upcoming-launches')).data
      const formattedUpcomingLaunches = upcomingLaunches.map(formatLaunchDate)
      setUpcomingLaunches(formattedUpcomingLaunches)
    } catch (error) {
      alert('algo deu errado')
    }
  }
  return () => load()
}