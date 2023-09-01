import city from './cities';

const selectCities = (state) => {
    var optionsList;
    switch (state) {
        case "Andra Pradesh":
            optionsList = city.AndraPradesh;
            break;
        case "Arunachal Pradesh":
            optionsList = city.ArunachalPradesh;
            break;
        case "Assam":
            optionsList = city.Assam;
            break;
        case "Bihar":
            optionsList = city.Bihar;
            break;
        case "Chhattisgarh":
            optionsList = city.Chhattisgarh;
            break;
        case "Goa":
            optionsList = city.Goa;
            break;
        case  "Gujarat":
            optionsList = city.Gujarat;
            break;
        case "Haryana":
            optionsList = city.Haryana;
            break;
        case "Himachal Pradesh":
            optionsList = city.HimachalPradesh;
            break;
        case "Jammu and Kashmir":
            optionsList = city.JammuKashmir;
            break;
        case "Jharkhand":
            optionsList = city.Jharkhand;
            break;
        case  "Karnataka":
            optionsList = city.Karnataka;
            break;
        case "Kerala":
            optionsList = city.Kerala;
            break;
        case  "Madya Pradesh":
            optionsList = city.MadhyaPradesh;
            break;
        case "Maharashtra":
            optionsList = city.Maharashtra;
            break;
        case  "Manipur":
            optionsList = city.Manipur;
            break;
        case "Meghalaya":
            optionsList = city.Meghalaya ;
            break;
        case  "Mizoram":
            optionsList = city.Mizoram;
            break;
        case "Nagaland":
            optionsList = city.Nagaland;
            break;
        case  "Orissa":
            optionsList = city.Orissa;
            break;
        case "Punjab":
            optionsList = city.Punjab;
            break;
        case  "Rajasthan":
            optionsList = city.Rajasthan;
            break;
        case "Sikkim":
            optionsList = city.Sikkim;
            break;
        case  "Tamil Nadu":
            optionsList = city.TamilNadu;
            break;
        case  "Telangana":
            optionsList = city.Telangana;
            break;
        case "Tripura":
            optionsList = city.Tripura ;
            break;
        case  "Uttaranchal":
            optionsList = city.Uttaranchal;
            break;
        case  "Uttar Pradesh":
            optionsList = city.UttarPradesh;
            break;
        case "West Bengal":
            optionsList = city.WestBengal;
            break;
        case  "Andaman and Nicobar Islands":
            optionsList = city.AndamanNicobar;
            break;
        case "Chandigarh":
            optionsList = city.Chandigarh;
            break;
        case  "Dadar and Nagar Haveli":
            optionsList = city.DadraHaveli;
            break;
        case "Daman and Diu":
            optionsList = city.DamanDiu;
            break;
        case  "Delhi":
            optionsList = city.Delhi;
            break;
        case "Lakshadeep":
            optionsList = city.Lakshadweep ;
            break;
        case  "Pondicherry":
            optionsList = city.Pondicherry;
            break;
    }
    return optionsList;
}

export default selectCities;