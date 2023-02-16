export const formatLaunchDate = (entry) => {
  const {date, ...entryWithoutDate} = entry
  const parsedDate = new Date(date)
  const formattedDate = `${parsedDate.getMonth() + 1}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`
  return {date: formattedDate, ...entryWithoutDate}
}