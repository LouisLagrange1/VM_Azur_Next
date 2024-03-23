# VM Azure Next

Lien GitHub : [github.com/LouisLagrange1/VM_Azur_Next](https://github.com/LouisLagrange1/VM_Azur_Next)

## Description du projet

Le projet consiste à créer une application web qui offre aux développeurs la possibilité de créer et d'accéder facilement à des environnements de test temporaires pour évaluer leurs logiciels. Au lieu de se préoccuper des détails techniques de la configuration, les développeurs peuvent simplement choisir leur environnement requis, comme Windows 11, via une interface conviviale, se connecter à distance via RDP, tester leur application, puis se déconnecter une fois les tests terminés.

## Installation du projet

### Remplir le fichier .env

Vous devez avoir un fichier .env à la racine de votre projet et remplacer ce qu'il y a après le "=" par votre clé.

```bash
JWT_SECRET=votre_clé
```

**Vous pouvez genérer une clé via le terminal avec Node en utilisant la commande suivante :**

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Lancement du projet

Pour lancer le projet veillez à bien avoir Node installer sur votre machine, ensuite, lancez les deux commandes suivantes :

```bash
npm i
```

```bash
npm run dev
```

Vous pouvez maintenant accéder au projet via l'url suivante :

```bash
http://localhost:3000
```

## Authentification

Pour accéder au lancement des VM il faut passer par une phase d' authentification.
Vous retrouverez ci-dessous les trois utilisateurs déjà configurés avec chacun un rôle différent.

**Utilisateur n°1 (Role Admin)** : Accès à toutes les VM

```bash
Name : User1
Password : Password1
```

**Utilisateur n°2 (Role Apprenti)** : Accès à une VM

```bash
Name : User2
Password : Password2
```

**Utilisateur n°3 (Role Observateur)** : Accès aucune VM

```bash
Name : User3
Password : Password3
```

## Informations sur le code

- Le projet est developpé en JavaScript avec le framework Next

- Le style a été fait avec la bibliothèque TailwindCSS

- Le token d'authentification a été fait avec JsonWebToken

- Les icones présentes dans le projet ont été prisent dans la bibliothèque React Icons
