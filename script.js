// Contenu des menus pour chaque jour
const menus = {
    lundi: [
        "Entrée: Salade de tomates et mozzarella",
        "Plat principal: Poulet rôti avec légumes",
        "Dessert: Tarte aux pommes"
    ],
    mardi: [
        "Entrée: Soupe de légumes",
        "Plat principal: Spaghetti bolognaise",
        "Dessert: Crème brûlée"
    ],
    mercredi: [
        "Entrée: Salade verte",
        "Plat principal: Quiche lorraine",
        "Dessert: Pudding au chocolat"
    ],
    jeudi: [
        "Entrée: Soupe de courgettes",
        "Plat principal: Gratin dauphinois avec steak haché",
        "Dessert: Tarte aux citrons"
    ],
    vendredi: [
        "Entrée: Salade de carottes râpées",
        "Plat principal: Poisson pané, purée de pommes de terre",
        "Dessert: Salade de fruits"
    ]
};

// Fonction pour afficher le menu d'un jour spécifique
function showMenu(day) {
    // Modifier le titre pour afficher le jour sélectionné
    document.getElementById('day-title').textContent = "Menu du " + capitalizeFirstLetter(day);
    
    // Récupérer la liste de menus pour ce jour
    const menuList = menus[day];
    
    // Vider la liste existante
    const menuListElement = document.getElementById('menu-list');
    menuListElement.innerHTML = '';
    
    // Ajouter les éléments du menu à la liste
    menuList.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        menuListElement.appendChild(li);
    });
}

// Fonction pour capitaliser la première lettre du jour
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
