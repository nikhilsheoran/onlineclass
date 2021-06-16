function timeAsNum(hours,minutes,seconds){
    return hours*10000+minutes*100+seconds; 
}
export const timeTable = {
    "Monday":["English","Chemistry","Physics","Maths","Computer"],
    "Tuesday":["English","Chemistry","Physics","Maths","Computer"],
    "Wednesday":["English","Chemistry","Physics","Maths","Computer"],
    "Thursday":["English","Chemistry","Physics","Maths","Computer"],
    "Friday":["Chemistry","English","Physics","Maths","Computer"]
};

export const classLink = {
    "CTBlock":"https://us04web.zoom.us/j/5556312068?pwd=bHUzSjBZTytoNC9hOEpKUlM0cDNnUT09",
    "English":"https://us04web.zoom.us/j/3826895594?pwd=VzVqSHRUQXgyQ3laL0Z4ZWhKSXllZz09",
    "Physics":"https://us04web.zoom.us/j/5556312068?pwd=bHUzSjBZTytoNC9hOEpKUlM0cDNnUT09",
    "Chemistry":"https://us02web.zoom.us/j/7523800259?pwd=bkxFSS9PRzF4Q1M0VVdvNG9BcG9mQT09",
    "Maths":"zoommtg://us04web.zoom.us/j/8826740115?pwd=M0dmSVlZcnRHbFNKVEtTY21IY1FqUT09",
    "Computer":"https://us04web.zoom.us/j/5853556094?pwd=i6MWQ9g2m6xaarxCj-4QPwBjuZR6"
};

export const blockStartTimings = {
    "start":timeAsNum(7,30,0),
    "Block1":timeAsNum(8,55,0),
    "Block2":timeAsNum(9,40,0),
    "Block3":timeAsNum(10,30,0),
    "Block4":timeAsNum(11,20,0),
    "Block5":timeAsNum(12,10,0),
    "end":timeAsNum(13,0,0)
};
