const input = document.getElementById("searchInput");
const btn = document.getElementById("searchBtn");

btn.addEventListener("click", searchPhone);

function searchPhone() {

    const value = input.value.toLowerCase().trim();

    const phone = phones.find(p =>
        (`${p.brand} ${p.model}`).toLowerCase().includes(value)
    );

    let old = document.getElementById("searchResult");

    if(old) old.remove();

    const card = document.createElement("div");

    card.id = "searchResult";

    card.className = "result-card";

    if(phone){

        const search = value.toLowerCase();

        const brands = [
        "Samsung",
        "Apple",
        "Huawei",
        "Honor",
        "Mobicel",
        "Tecno",
        "Oppo",
        "Vivo",
        ];

        let brandFound = brands.find(b => search.includes(b.toLowerCase()));

        let title = phone.brand + " " + phone.model;

        if(brandFound){
            title = "All types of " + brandFound + " models";
        }

        card.innerHTML = `
            <h2>📱 ${title}</h2>

            <p class="available">✅ Supported for Repair</p>

            <ul>
                <li>Screen Replacement</li>
                <li>Battery Replacement</li>
                <li>Charging Port Repair</li>
                <li>Software Repair</li>
                <li>FRP / Gmail Unlock</li>
            </ul>

            <a class="result-btn" href="booking.html">
                📅 Book Repair
            </a>

            <a class="result-btn whatsapp-btn"
            href="https://wa.me/27608547810?text=Hi IM Repair, I need a quote for ${title}">
                💬 Request Quote
            </a>
        `;

    }else{

        card.innerHTML = `
            <h2>❌ Phone Not Found</h2>

            <p>
            We couldn't find that model.
            Please contact IM Repair.
            </p>

            <a class="result-btn whatsapp-btn"
            href="https://wa.me/27608547810">

            Contact on WhatsApp

            </a>
        `;

    }

    document.querySelector(".container").appendChild(card);

}

function searchBrand(brand){

    input.value = brand;

    searchPhone();

}