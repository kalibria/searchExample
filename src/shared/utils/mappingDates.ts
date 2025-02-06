export function mappingDates(date: string): string {
    console.log("entered date", date)
    const newDate = new Date(date)
    console.log("new date", newDate)
    return newDate.toLocaleDateString('en-GB').replace(/\//g, '.')
}