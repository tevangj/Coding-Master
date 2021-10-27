Algoritmo Cine
	entradaCine <- 15
	Escribir "Cuanto dinero tenemos"
	Definir dinero Como Entero
	Leer dinero

	personas <- dinero/entradaCine
	
	
	Si personas < 1 Entonces
		Escribir "Nadie puede entrar"
	SiNo
		Escribir personas, " Pueden entrar al cine"
	FinSi
	
FinAlgoritmo
