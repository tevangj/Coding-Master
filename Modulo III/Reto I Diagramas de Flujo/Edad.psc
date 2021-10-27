Algoritmo Edad
	Escribir "Persona1: Proporcione su edad"
	Leer edad1
	
	Escribir "Persona2: Proporcione su edad"
	Leer edad2
	
	diferencia <- (edad1 - edad2)
	
	Si diferencia < 0 Entonces
		diferencia <- diferencia * (-1)
		Escribir "La diferencia de edad es ", diferencia
	SiNo
		Escribir "La diferencia de edad es ", diferencia
	FinSi
FinAlgoritmo
