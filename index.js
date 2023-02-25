setInterval(() => {
    let imgs = document.querySelectorAll('img');

    imgs.forEach((a, i) => {
        a.src = 'https://ichef.bbci.co.uk/news/640/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg'
        //래액트 덕후이면 쓰는 코드(리액트 사진임ㅋㅋㅋ):
        //a.src = https://www.patterns.dev/img/reactjs/react-logo@3x.svg
    })

},500)
