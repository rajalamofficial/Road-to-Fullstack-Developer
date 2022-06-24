{
    // create date
    const today = new Date();
    console.log(today);

    const myBirthday = new Date(2004, 7, 24);
    console.log(myBirthday);

    //                          YYYY  MM  D  HH  MM  SS  MS
    const randomTime = new Date(2019, 7, 24, 12, 50, 41, 123);
    console.log(randomTime);

    const epochTime = new Date(1655230710553);
    console.log(epochTime)
}

console.log("")

{
    // epoch & unix (Constructor)
    const now = new Date();
    console.log(now.getTime());

    const myBirthday = new Date(2004, 7, 24);
    console.log(myBirthday.getTime());

    const randomTime = new Date(2019, 0, 21, 22, 40, 60, 200);
    console.log(randomTime.getTime());

}

console.log("")

{
    // date parsing (static method)
    const now = Date.now();
    console.log(now);
    console.log(new Date(now))

    // YYYY-MM-DDTHH:mm:ss.sssZ
    const myBirthday = Date.parse("2004-08-24T12:20:12.120+07:00");
    console.log(myBirthday);
    console.log(new Date(myBirthday));
}

console.log("")

{
    // getter and setter (instance object)
    const date = new Date();
    date.setFullYear(2020)

    console.log(date.getFullYear());
    console.log(date.getMonth());
    console.log(date.getDate());
    console.log(date.getHours());
    console.log(date.getMinutes());
    console.log(date.getSeconds());
    console.log(date.getMilliseconds());
    
    // +07:00 -420 menit dari UTC 00:00
    console.log(date.getTimezoneOffset());
}

console.log("")

{
    // case
    const now = new Date().getFullYear();

    const myBirthday = new Date(2004, 7, 24).getFullYear();

    const myAge = now - myBirthday;
    console.log(myAge);
}