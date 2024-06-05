// document.getElementById('bmi-form').addEventListener('submit', (event) => {
//   event.preventDefault();

//   const height = parseFloat(document.getElementById('height').value);
//   const weight = parseFloat(document.getElementById('weight').value);
//   const time = parseFloat(document.getElementById('time').value);

//   if (isNaN(height) || isNaN(weight) || isNaN(time)) {
//     alert('Por favor, ingresa valores válidos para altura, peso y tiempo.');
//     return;
//   }

//   const bmi = weight / ((height / 100) ** 2);
//   let category, routine;

//   if (bmi < 18.5) {
//     category = 'Peso bajo';
//     routine = `Aquí está tu rutina de ${time} minutos:
//     - Sentadillas (3 series de 10-12 repeticiones)
//     - Dominadas (3 series de 8-10 repeticiones)
//     - Press de hombros (3 series de 10-12 repeticiones)
//     - Caminata (20-30 minutos)
//     - Trote ligero (15-20 minutos)
//     Consume una dieta rica en proteínas, carbohidratos y grasas saludables.`;
//   } else if (bmi >= 18.5 && bmi < 25) {
//     category = 'Peso saludable';
//     routine = `Aquí está tu rutina de ${time} minutos:
//     - Peso muerto (3 series de 8-10 repeticiones)
//     - Press de banca (3 series de 10-12 repeticiones)
//     - Sentadillas (3 series de 10-12 repeticiones)
//     - Trote (20-25 minutos)
//     - Bicicleta (15-20 minutos)
//     - Natación (15-20 minutos)
//     Mantén una dieta equilibrada con macronutrientes adecuados.`;
//   } else if (bmi >= 25 && bmi < 30) {
//     category = 'Sobrepeso';
//     routine = `Aquí está tu rutina de ${time} minutos:
//     - Sentadillas (3 series de 12-15 repeticiones)
//     - Dominadas (3 series de 10-12 repeticiones)
//     - Press de hombros (3 series de 12-15 repeticiones)
//     - Correr (20-25 minutos)
//     - Clases de HIIT (15-20 minutos)
//     - Ciclismo (15-20 minutos)
//     Enfócate en una dieta baja en calorías y rica en alimentos saludables.`;
//   } else {
//     category = 'Obesidad';
//     routine = `Aquí está tu rutina de ${time} minutos:
//     - Peso muerto (3 series de 10-12 repeticiones)
//     - Press de banca (3 series de 12-15 repeticiones)
//     - Sentadillas (3 series de 12-15 repeticiones)
//     - Correr (20-25 minutos)
//     - Clases de HIIT (15-20 minutos)
//     - Nado (15-20 minutos)
//     Sigue una dieta baja en carbohidratos y rica en proteínas y verduras.`;
//   }

//   document.getElementById('bmi-result').textContent = `Tu IMC es: \[${bmi.toFixed(2)}\]`;
//   document.getElementById('bmi-category').textContent = `Categoría: ${category}`;
//   document.getElementById('routine').textContent = routine;
// });

