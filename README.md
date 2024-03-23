# Next Azure Cloud 💫 - Projet de machines virtuelles éphémères

Repository du projet : [github.com/adammehdaoui/next-azure-cloud](https://github.com/adammehdaoui/next-azure-cloud)

## Sommaire

- [Description du projet](#description-du-projet)
- [Installation du projet](#installation-du-projet)
  - [Remplir le fichier .env](#remplir-le-fichier-env)
  - [Sans docker](#sans-docker)
- [Authentification](#authentification)
- [Documentation du code source](#documentation-du-code-source)
  - [Structure du projet](#structure-du-projet)

## Description du projet

Ce projet permet de lancer une machine virtuelle avec un nouveau groupe de ressource propre sur le cloud d'Azure. En fonction des droits de l'utilisateur connecté, il est possible de lancer ou non une machine virtuelle d'un système d'exploitation donné.
L'application renvoie ensuite les étapes pour se connecter à ces machines virtuelles (SSH pour une machine Unix ou RDP avec Microsoft Remote Desktop sur MacOS pour une machine Windows).

## Installation du projet

### Remplir le fichier .env

Voici comment le fichier .env doit être rempli **(comment récupérer ces valeurs plus bas dans la documentation) :**

```bash
JWT_SECRET='xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
```

**_Exemple pour générer une clef pour le JWT_SECRET sous MacOS :_**

```bash
openssl rand -base64 32
```

### Sans docker

Prérequis : avoir Node installé sur votre machine.

Commandes à effectuer à la racine du projet :

```bash
npm i && npm run dev
```

L'application est maintenant accessible depuis le port 3000.

## Authentification

L'accès à la plateforme nécessite une authentification. Trois utilisateurs ont été préconfigurés pour faciliter le processus. Veuillez utiliser les informations d'identification suivantes :

Utilisateur pouvant lancer **trois machines virtuelles avec un OS différent** (CentOS, Windows, Ubuntu)

Login : **user-admin**; Mot de passe : **user-admin**

Utilisateur pouvant lancer **une machine virtuelle** Ubuntu :

Login : **user-contributor**; Mot de passe : **user-contributor**

Utilisateur **sans crédit** :

Login : **user-restricted**; Mot de passe : **user-restricted**

## Documentation du code source

L'application est développée avec le framework Next.js (basé sur la librairie React).
Le framework permet une fonction Back avec les server actions et routes handlers (qui gérerons ici les appels Azure et la connexion des utilisateurs)

Dépendances notables du projet :

- TypeScript
- TailwindCSS
- Azure SDK : https://learn.microsoft.com/en-us/azure/developer/javascript/how-to/with-azure-sdk/create-manage-virtual-machine
- react-icons : https://react-icons.github.io/react-icons/
- jsonwebtoken
- sonner : https://sonner.emilkowal.ski/

### Structure du projet

Le projet suit la structure _app router_ introduit dans Next 13.

- src/app : contient la logique des routes accessibles côté client
- src/components : contient les composants React appelés dans les pages principales (dans src/app)
- src/config : contient la configuration de base de l'application (la configuration de l'image des VM entre autre)
- src/utils : contient la logique de création des vms et de leur nettoyage ainsi que la gestion de la connexion des utilisateurs à l'application (token JWT + cookies)
- src/utils/validators : types principaux utilisés dans le code source TypeScript.
