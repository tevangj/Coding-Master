Algoritmo calculadora
	Escribir "Proporcionar un n�mero"
	Leer numero1
	
	Escribir "Proporcionar un segudo n�mero"
	Leer numero2
	
	Escribir "Puede hacer las siguintes operaciones"
	Escribir "Tecle 1 para sumar"
	Escribir "Tecle 2 para restar"
	Escribir "Tecle 3 para multiplicar"
	Escribir "Tecle 4 para dividir"
	
	Escribir "Que operacion quiere realizar"
	Leer operacion
	
	Segun operacion Hacer
		1:
			suma <- numero1 + numero2
			Escribir "La suma es ",suma
		2:
			resta <- numero1 - numero2
			Escribir "La resta es ",resta
		3:
			multiplicar <- numero1 * numero2
			Escribir "La multiplicaci�n es ",multiplicar
		4:
			division <- numero1 / numero2
			Escribir "La divisi�n es ",division
	FinSegun
	
	
FinAlgoritmo
