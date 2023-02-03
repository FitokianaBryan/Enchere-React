export function FormatDate(dates){
    const date = new Date(dates);
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = new Intl.DateTimeFormat('fr-FR', options).format(date);
    return formattedDate;
} 