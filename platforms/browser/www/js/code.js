  function ajouter(){
    var produit = document.getElementById("produit").value;
    var quantite = document.getElementById("quantite").value;
    var prix = document.getElementById("prix").value;
    var pInfo = {"quantité":quantite,"prix":prix};
    localStorage.setItem(produit,JSON.stringify(pInfo));

    document.getElementById("produit").value = "";
    document.getElementById("quantite").value = "";
    document.getElementById("prix").value = "";
    afficher();
  }
  function modifier(){
    var produit = document.getElementById("produit").value;
    document.getElementById("quantite").value = JSON.parse(localStorage.getItem(produit)).quantité;
    document.getElementById("prix").value = JSON.parse(localStorage.getItem(produit)).prix;
    afficher();
  }
  function supprimer(){
    console.log("yes");
    var produit = document.getElementById("produit").value;
    var quantite = document.getElementById("quantite").value;

    localStorage.removeItem(produit,quantite);
    afficher();
  }
  function doclear(){
    localStorage.clear();
    afficher();
  }
  function afficher(){
    var key = "";
    var paires = "<tr class='first'><td><b>Produit</b></td><td><b>Quantité</b></td><td><b>Prix</b></td></tr>";
    document.getElementById("paires").innerHTML = paires;
    for(var cpt=0;cpt < localStorage.length; cpt++){
      console.log(localStorage.length);
    var  key = localStorage.key(cpt);
    console.log(key);
    var essai = JSON.parse(localStorage.getItem(key));
    console.log(essai);
      paires += "<tr><td>"+key+"</td><td>"+essai.quantité+"</td><td>"+essai.prix+"</tr>";
    }
    if (paires=="<tr class='first'><td><b>Produit</b></td><td><b>Quantité</b></td><td><b>Prix</b></td></tr>") {
      paires+="<tr><td>VIDE</td><td>VIDE</td><td>VIDE</td></tr>";
    }
    document.getElementById("paires").innerHTML = paires;
  }
