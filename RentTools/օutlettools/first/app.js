const images = [
    "../images/1.jpg",
    "../images/2.jpg",
    "../images/3.jpg",
    "../images/4.jpg",
    "../images/5.jpg",
    "../images/6.jpg",
    "../images/7.jpg",
    "../images/8.jpg",
    "../images/9.jpg",
    "../images/10.jpg",
    "../images/11.jpg",
    "../images/12.jpg",
    "../images/13.jpg",
    "../images/14.jpg",
    "../images/15.jpg",
    "../images/16.jpg",
    "../images/17.jpg",
    "../images/18.jpg",
    "../images/19.jpg",
    "../images/20.jpg",
    "../images/21.jpg"
];

const names = [
    "Դռել մարտկոցով 12V Li-on ",
    "Էլեկտրական մինի անկյունային УШМ Բալգարկա մարտկոցով",
    "Հարվածային դռել",
    "Եռակցման մեքենա IWM-120, 20-200A, MMA+TIG",
    "Բալգարկա (անկյունային) 125մմ",
    "Մինի Բալգարկա մարտկոցով УШМ 12V",
    "Էլեկտրական հարվածային Դռել DEU",
    "Դռել ԴՈՒ-500",
    "Անլար շուռուպավյորտ 12V 15Նմ լույսով",
    "Էլեկտրական հարվածային Դռել DU-60 Eco",
    "Մարտկոցով Բալգարկա",
    "Էլեկտրական հարվածային Դռել DU-60 ",
    "Լարային Բալգարկա գերտաքացումից պաշտպանությամբ",
    "Անլար շուռուպավյորտ CD-12G, 12V, 1,5 Աչ, 28 ՆՄ",
    "Դռել ոչ հարվածային PS-700P",
    "Վիբրոպրիսոսկա սալիկների համար",
    "Մարտկոցով Շուռուպավյորտ 12V, 15 ՆՄ",
    "Լարային Բալգարկա",
    "Ավտոմեքենաների փայլեցնող սարք TRUXP2916",
    "Բալգարկա (անկյունային) AG-72 125 Eco",
    "Ավտոմեքենաների փայլեցնող սարք TRUXP2916",
];

const prices = [
    "Գին - 3900դր",
    "Գին - 8400դր",
    "Գին - 7000դր",
    "Գին - 12000դր",
    "Գին - 8900դր",
    "Գին - 6500դր",
    "Գին - 9200դր",
    "Գին - 9700դր",
    "Գին - 4600դր",
    "Գին - 8200դր",
    "Գին - 7200դր",
    "Գին - 9900դր",
    "Գին - 6900դր",
    "Գին - 5200դր",
    "Գին - 7800դր",
    "Գին - 14300դր",
    "Գին - 4100դր",
    "Գին - 9800դր",
    "Գին - 9500դր",
    "Գին - 7800դր",
    "Գին - 7700դր"
]

function createStaticID(index) {
    const letters = String.fromCharCode(97 + ((index / 26) % 26)) + String.fromCharCode(97 + (index % 26));

    const digit = index % 10;
    return `${letters}${digit}`;
}

function createSections() {
    const contentDiv = document.getElementById("content");
    const numSections = Math.ceil(images.length / 3);

    for (let i = 0; i < numSections; i++) {
        const section = document.createElement("section");
        section.className = "tools_section";

        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;

            if (index < images.length) {
                const innerDiv = document.createElement("div");
                innerDiv.className = "inner_div";


                const staticID = createStaticID(index);
                innerDiv.id = staticID;

                const orderCall = document.createElement("button");
                orderCall.className = "order_call";

                const img = document.createElement("img");
                img.src = images[index];
                img.className = "imgs";
                innerDiv.appendChild(img);

                const name = document.createElement("p");
                name.textContent = names[index];
                innerDiv.appendChild(name);

                const price = document.createElement("p");
                price.textContent = prices[index];
                price.className = "daily_renting";
                innerDiv.appendChild(price);

                const call_text = document.createElement("p");
                call_text.textContent = "Պատվիրել հիմա";
                orderCall.appendChild(call_text);

                const ring = document.createElement("img");
                ring.src = "../images/ring.gif";
                ring.className = "gif";
                orderCall.appendChild(ring);

                orderCall.addEventListener("click", function () {
                    openModal(images[index], names[index], prices[index], staticID);
                });

                innerDiv.appendChild(orderCall);

                section.appendChild(innerDiv);
            }
        }

        contentDiv.appendChild(section);
    }
}


window.onload = createSections;

function openModal(imageSrc, nameText, price, staticID) {
    const modal = document.getElementById("orderModal");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalPrice = document.getElementById("modalPrice");

    modalImage.src = imageSrc;
    modalName.textContent = nameText;
    modalPrice.textContent = price;

    document.getElementById("modalId").textContent = staticID;

    modal.style.display = "flex"; 
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none"
}

async function sendMessage() {
    document.getElementById("orderModal").style.display = "none"


    const botToken = '7624258849:AAEy_x0FoukGrnomDq5PDLEJ9cfqa6HM_2g';
    const chatId = '5113185802';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const name = document.getElementById("input_name").value
    const phone = document.getElementById("phone").value
    const id = document.getElementById("modalId").textContent;

    const message = `Նոր հաճախորդ
Վաճառք

Անուն Ազգանուն : ${name}, 
Հեռախոսահամար  ։ ${phone},
Ապրանքի ID: ${id}`;

  
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'MarkdownV2'
            })
        });
  
        if (!response.ok) {
          const errorDetail = await response.json();
          throw new Error(`Failed to send message: ${errorDetail.description}`);
        }
      
        const data = await response.json();
        console.log('Message sent:', data);
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
}

function message() {
    alert("Մեր օպերատորը շուտով կկապնվի Ձեզ հետ առաքումը կազմակերպելու նպատակով։")
}

window.onload = createSections;

function openModal(imageSrc, nameText, price) {
    const modal = document.getElementById("orderModal");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalPrice = document.getElementById("modalPrice")

    modalImage.src = imageSrc;
    modalName.textContent = nameText;
    modalPrice.textContent = price;

    modal.style.display = "flex"; 
}

function closeModal() {
    document.getElementById("orderModal").style.display = "none"
}

async function sendMessage() {
    document.getElementById("orderModal").style.display = "none"

    const botToken = '7624258849:AAEy_x0FoukGrnomDq5PDLEJ9cfqa6HM_2g';
    const chatId = '5113185802';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const name = document.getElementById("input_name").value
    const phone = document.getElementById("phone").value
    const message = `Նոր հաճախորդ
Վաճառք

Անուն Ազգանուն : ${name}, 
Հեռախոսահամար ։ ${phone}`;

  
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'MarkdownV2'
            })
        });
  
        if (!response.ok) {
          const errorDetail = await response.json();
          throw new Error(`Failed to send message: ${errorDetail.description}`);
        }
      
        const data = await response.json();
        console.log('Message sent:', data);
    } catch (error) {
      console.error('Error sending message:', error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', (event) => {
        event.preventDefault();
        sendMessage();
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const secHeader = document.getElementById("sec_header");

    menuButton.addEventListener("click", function () {
        if (secHeader.style.display === "none" || secHeader.style.display === "") {
            secHeader.style.display = "grid";  
        } else {
            secHeader.style.display = "none";
        }
    });
});

// security

// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
// });

// document.addEventListener('keydown', (event) => {
//     // Block common shortcuts for viewing source or opening DevTools
//     if (
//         event.key === "F12" || // F12 key for DevTools
//         (event.ctrlKey && event.key === "u") || // Ctrl + U for View Source
//         (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl + Shift + I for DevTools
//         (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl + Shift + J for Console
//         (event.ctrlKey && event.key === "S") // Ctrl + S for Save Page
//     ) {
//         event.preventDefault();
//     }
// });


// document.addEventListener('selectstart', (event) => {
//     event.preventDefault();
// });

// document.addEventListener('dragstart', (event) => {
//     event.preventDefault();
// });