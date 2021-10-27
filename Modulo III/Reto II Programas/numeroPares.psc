Algoritmo numeroPares
	numPar<-0
	numImpar<-0
	Para i<-1 Hasta 10 Hacer
		Escribir "Ingresar un numero entero"
		Leer num
		
		Si num MOD 2 = 0 Entonces
			numPar <- numPar+1
			Escribir num," Es numero Par"
			Escribir "Numeros pares ", numPar
		SiNo
			numImpar <- numImpar+1
			Escribir "Numeros impares ", numImpar
		FinSi
	FinPara
	Escribir "Total de numero pares ingresados ", numPar
	Escribir "Total de numero impares ingresados ", numImpar
	
FinAlgoritmo
