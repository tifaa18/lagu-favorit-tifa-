var lagu = [
    ['Adore U', 'Seventeen', '822K', '45M', 'adore u.jpg'],
    ['Mansae', 'Seventeen', '1M', '69M', 'mansae.jpg'],
    ['Pretty U', 'Seventeen', '583K', '29M', 'pretty u.jpg'],
    ['Very Nice', 'Seventeen', '1,8M', '147M', 'very nice.jpg' ],
    ['HIGHLIGHT', 'Seventeen', '325K', '10M', 'highlight.jpg' ],
    ["Don't Wanna Cry", 'Seventeen', '3,8M', '289M', 'dont wanna cry.jpg' ],
    ['CLAP', 'Seventeen', '2,1M', '131M', 'clap.jpg'],
    ['THANKS', 'Seventeen', '1,4M', '77M', 'thanks.jpg'],
    ['CALL CALL CALL!', 'Seventeen', '787K', '47M', 'ccc.jpg'],
    ['Oh My!', 'Seventeen', '1,5M', '77M', 'oh my.jpg'],
    ['Holiday', 'Seventeen', '655K', '29M', 'oh my.jpg'],
    ['Home', 'Seventeen', '1,6M', '84M', 'home.jpg'],
    ['Getting Closer', 'Seventeen', '558K', '24M', 'home.jpg'],
    ['Happy Ending', 'Seventeen', '552K', '28M', 'happy ending.jpg'],
    ['HIT', 'Seventeen', '1,7M', '93M', 'hit.jpg'],
    ['Fear', 'Seventeen', '1,3M', '62M', 'fear.jpg'],
    ['Snap Shoot', 'Seventeen', '847K', '31M', 'fear.jpg'],
    ['Left & Right', 'Seventeen', '2,7M', '129M', 'l&r.jpg'],
];

var element = '';

for (var i = 0; i < lagu.length; i++) {
    element += `<div class="lagu">
            <h2>${lagu[i][0]}</h2>
            <div class="by">
                <small>
                    <i>Oleh ${lagu[i][1]}</i>
                </small>
            </div>
            <img src="${lagu[i][4]}" alt="" srcset="">
            <div class="bawah">
                <div class="kanan">${lagu[i][2]}</div>
                <div class="kiri">${lagu[i][3]}</div>
            </div>
        </div>`;
}

var konten = document.getElementById("container");
 
konten.innerHTML = element

