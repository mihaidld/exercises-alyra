### 3 view vs pure

Décrivez avec vos mots la différence entre une fonction déclarée comme pure et une fonction déclarée comme view:

#### **View functions**

< Functions can be declared `view` in which case they promise not to modify the state.

#### **Pure functions**

< Functions can be declared `pure` in which case they promise not to read from or modify the state.

La difference est dans l'accès aux données du smart contract : les fonctions `view` peuvent lire les variables de state, mais sans les modifier, pendant que les fontions `pure` ne changent ni accedent les variables de state.
