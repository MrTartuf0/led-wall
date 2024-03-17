# led-wall api ✨

![model](https://github.com/MrTartuf0/led-wall/assets/79630556/4ac68b97-fe84-40a3-8650-148e6ec6e519)

# Procedura di configurazione del raspberry pi

Clonare la repository corrente sul raspberry pi

```bash
git clone https://github.com/MrTartuf0/led-wall.git
cd led-wall
```

Cambiare il branch in `led-wall/api`

```bash
git switch api  
```

Installare le dipendenze necessarie

```bash
npm i  
```

Eseguire il webserver express per il controllo dei led

```bash
sudo node httpOnly.js  
```

![image](https://github.com/MrTartuf0/led-wall/assets/79630556/8bd75cca-54c7-441f-b2bf-1cf21e344c00)

Per assicurarsi che funzioni correttamente, si colleghi un computer nella stessa rete locale, e si inserisca l'URL dato in risposta, sul browser. 

![image](https://github.com/MrTartuf0/led-wall/assets/79630556/974d80f1-2d5d-479d-a65c-9a12bb410963)
