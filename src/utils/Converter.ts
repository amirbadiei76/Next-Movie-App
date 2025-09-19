export function convertDurationToHour(duration: number): number {
    let hour: number = Math.floor(duration / 3600)
    return hour
}

export function convertDurationToMinute(duration: number): number {
    let minutes: number = Math.floor((duration / 60) % 60)
    return minutes
}