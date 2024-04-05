
/**
 * A function that takes a target date and current date and initializes a new Date object for the target date.
 *
 * @param {number} targetDate - the target date in milliseconds
 * @param {Date} currentDate - the current date
 * @return {Date} a new Date object representing the target date
 */
export default function contdown(timestamp: number, currentDate: Date): number[] {
    const TargetDate: Date = new Date(timestamp * 1000);
    const now: number = currentDate.getTime();

    let timeRemaining: number = TargetDate.getTime() - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    let date = [days, hours, minutes, seconds];

    if(TargetDate.getTime() < now){
        date = [0, 0, 0, 0];
        console.log("finished")
    }

    return date
}

// 0 - 1  0% to 100%    
export function ProgressBar(hardcap : number, raised : number): number{
    return raised / hardcap * 100
}