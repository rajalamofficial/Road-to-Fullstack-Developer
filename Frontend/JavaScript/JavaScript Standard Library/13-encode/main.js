{
    // encode uri dan code url
    const url = "http://example.com/?name=marsha lenathea";
    console.log(url);

    const encoded = encodeURI(url);
    console.log(encoded);

    const decoded = decodeURI(encoded);
    console.log(decoded)
}

console.log("")

{
    const value = "marsha&lenathea= lavia";
    const url = "http://example.com/?name=";
    console.log(url + value);

    const encoded = encodeURIComponent(value);
    console.log(url + encoded);

    const decoded = decodeURIComponent(encoded);
    console.log(url + decoded);
}