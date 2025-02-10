export function mappingDates(date: string): string {
    const newDate = new Date(date)
    return newDate.toLocaleDateString('en-GB').replace(/\//g, '.')
}