document.getElementById("btn").addEventListener("click", update);

async function fetchContents() {
    console.log("Entered fetchContents");
    // 국방부
    fetch("http://www.mod.gov.cn/jzhzt/node_47321.htm")
        .then((response) => response.text())
        .then((responseText) => {
            //DOM scrape
            const responseDoc = new DOMParser().parseFromString(
                responseText,
                "text/html"
            );
            const responseElement = responseDoc.querySelector(".title");
            //DOM read
            urlDefense =
                "http://www.mod.gov.cn/jzhzt/" +
                responseElement.innerHTML.split('"')[1];
            dateDefense = responseElement.textContent;
            //DOM manipulate
            var element = document.getElementById("defense");
            element.href = urlDefense;
            element.textContent = `최신 브리핑 날짜: ${dateDefense}`;
        });

    //외교부
    fetch("https://www.fmprc.gov.cn/web/fyrbt_673021/")
        .then((response) => response.text())
        .then((responseText) => {
            //DOM scrape
            const responseDoc = new DOMParser().parseFromString(
                responseText,
                "text/html"
            );
            const responseElement =
                responseDoc.getElementsByTagName("ul")[2].firstElementChild;
            //DOM read
            urlForeign =
                "https://www.fmprc.gov.cn/web/fyrbt_673021" +
                responseElement.innerHTML.split('"')[1].slice(1);
            dateForeign = responseElement.textContent.split("外")[0];
            //DOM manipulate
            var element = document.getElementById("foreign");
            element.href = urlForeign;
            element.textContent = `최신 브리핑 날짜: ${dateForeign}`;
        });

    //외교부
    fetch("https://www.fmprc.gov.cn/web/fyrbt_673021/")
        .then((response) => response.text())
        .then((responseText) => {
            //DOM scrape
            const responseDoc = new DOMParser().parseFromString(
                responseText,
                "text/html"
            );
            const responseElement =
                responseDoc.getElementsByTagName("ul")[2].firstElementChild;
            //DOM read
            urlForeign =
                "https://www.fmprc.gov.cn/web/fyrbt_673021" +
                responseElement.innerHTML.split('"')[1].slice(1);
            dateForeign = responseElement.textContent.split("外")[0];
            //DOM manipulate
            var element = document.getElementById("foreign");
            element.href = urlForeign;
            element.textContent = `최신 브리핑 날짜: ${dateForeign}`;
        });

    //상무부
    fetch("http://www.mofcom.gov.cn/article/ae/slfw/")
        .then((response) => response.text())
        .then((responseText) => {
            //DOM scrape
            const responseDoc = new DOMParser().parseFromString(
                responseText,
                "text/html"
            );
            const responseElement =
                responseDoc.getElementsByTagName("ul")[1].children[1];
            const str = responseElement.textContent;
            //DOM read

            urlCommerce =
                "http://www.mofcom.gov.cn" +
                responseElement.innerHTML.split('"')[5];
            dateCommerce = str.substring(
                str.indexOf("（") + 1,
                str.indexOf("）")
            );
            //DOM manipulate
            var element = document.getElementById("commerce");
            element.href = urlCommerce;
            element.textContent = `최신 브리핑 날짜: ${dateCommerce}`;
        });

    return "Fetch complete";
}

async function update() {
    console.log("Entered update");
    const result = await fetchContents();
    console.log(result);
    console.log("Exiting update");
}
