
const ACCESS_CODE = 'HSB2026';
const exercises = [
  {
    "id": 1,
    "name": "Press banca con barra",
    "category": "Pecho",
    "material": "Barra + banco",
    "level": "Intermedio",
    "primary": "Pecho",
    "secondary": [
      "Tríceps",
      "Hombro anterior"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Press%20banca%20con%20barra%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco firme y centrado con la barra o las mancuernas.",
      "Apoya los pies completos en el suelo."
    ],
    "execution": [
      "Junta ligeramente los omóplatos y saca pecho.",
      "Baja controlado sin perder la posición.",
      "Empuja fuerte sin levantar el glúteo del banco."
    ],
    "shoes": "Zapatilla plana: Converse, Vans, barefoot o similar. Evita running con mucha amortiguación.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Máquina convergente",
      "Press con mancuernas",
      "Flexiones"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 2,
    "name": "Press banca con mancuernas",
    "category": "Pecho",
    "material": "Mancuernas + banco",
    "level": "Intermedio",
    "primary": "Pecho",
    "secondary": [
      "Tríceps",
      "Hombro anterior"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Press%20banca%20con%20mancuernas%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco firme y centrado con la barra o las mancuernas.",
      "Apoya los pies completos en el suelo."
    ],
    "execution": [
      "Junta ligeramente los omóplatos y saca pecho.",
      "Baja controlado sin perder la posición.",
      "Empuja fuerte sin levantar el glúteo del banco."
    ],
    "shoes": "Zapatilla plana: Converse, Vans, barefoot o similar. Evita running con mucha amortiguación.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Máquina convergente",
      "Press con mancuernas",
      "Flexiones"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 3,
    "name": "Press inclinado con mancuernas",
    "category": "Pecho",
    "material": "Mancuernas + banco inclinado",
    "level": "Intermedio",
    "primary": "Pecho",
    "secondary": [
      "Tríceps",
      "Hombro anterior"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Press%20inclinado%20con%20mancuernas%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco firme y centrado con la barra o las mancuernas.",
      "Apoya los pies completos en el suelo."
    ],
    "execution": [
      "Junta ligeramente los omóplatos y saca pecho.",
      "Baja controlado sin perder la posición.",
      "Empuja fuerte sin levantar el glúteo del banco."
    ],
    "shoes": "Zapatilla plana: Converse, Vans, barefoot o similar. Evita running con mucha amortiguación.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Máquina convergente",
      "Press con mancuernas",
      "Flexiones"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 4,
    "name": "Aperturas en polea",
    "category": "Pecho",
    "material": "Poleas",
    "level": "Intermedio",
    "primary": "Pecho",
    "secondary": [
      "Tríceps",
      "Hombro anterior"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Aperturas%20en%20polea%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco firme y centrado con la barra o las mancuernas.",
      "Apoya los pies completos en el suelo."
    ],
    "execution": [
      "Junta ligeramente los omóplatos y saca pecho.",
      "Baja controlado sin perder la posición.",
      "Empuja fuerte sin levantar el glúteo del banco."
    ],
    "shoes": "Zapatilla plana: Converse, Vans, barefoot o similar. Evita running con mucha amortiguación.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Máquina convergente",
      "Press con mancuernas",
      "Flexiones"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 5,
    "name": "Flexiones",
    "category": "Pecho",
    "material": "Peso corporal",
    "level": "Principiante",
    "primary": "Pecho",
    "secondary": [
      "Tríceps",
      "Hombro anterior"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Flexiones%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco firme y centrado con la barra o las mancuernas.",
      "Apoya los pies completos en el suelo."
    ],
    "execution": [
      "Junta ligeramente los omóplatos y saca pecho.",
      "Baja controlado sin perder la posición.",
      "Empuja fuerte sin levantar el glúteo del banco."
    ],
    "shoes": "Zapatilla plana: Converse, Vans, barefoot o similar. Evita running con mucha amortiguación.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Máquina convergente",
      "Press con mancuernas",
      "Flexiones"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 6,
    "name": "Press en máquina convergente",
    "category": "Pecho",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Pecho",
    "secondary": [
      "Tríceps",
      "Hombro anterior"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Press%20en%20m%C3%A1quina%20convergente%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco firme y centrado con la barra o las mancuernas.",
      "Apoya los pies completos en el suelo."
    ],
    "execution": [
      "Junta ligeramente los omóplatos y saca pecho.",
      "Baja controlado sin perder la posición.",
      "Empuja fuerte sin levantar el glúteo del banco."
    ],
    "shoes": "Zapatilla plana: Converse, Vans, barefoot o similar. Evita running con mucha amortiguación.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Máquina convergente",
      "Press con mancuernas",
      "Flexiones"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 7,
    "name": "Jalón al pecho",
    "category": "Espalda",
    "material": "Polea alta",
    "level": "Principiante",
    "primary": "Espalda",
    "secondary": [
      "Bíceps",
      "Trapecio medio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Jal%C3%B3n%20al%20pecho%20t%C3%A9cnica",
    "setup": [
      "Siéntate o colócate estable antes de tirar.",
      "Saca pecho sin exagerar la lumbar."
    ],
    "execution": [
      "Inicia el movimiento llevando los codos hacia atrás o hacia abajo.",
      "No tires solo con los brazos.",
      "Vuelve controlado, sin dejar que el peso te arrastre."
    ],
    "shoes": "Zapatilla plana o estable. En remos pesados, mejor plana/barefoot.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Remo en máquina",
      "Jalón neutro",
      "Remo con mancuerna"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 8,
    "name": "Remo sentado en polea",
    "category": "Espalda",
    "material": "Polea baja",
    "level": "Principiante",
    "primary": "Espalda",
    "secondary": [
      "Bíceps",
      "Trapecio medio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Remo%20sentado%20en%20polea%20t%C3%A9cnica",
    "setup": [
      "Siéntate o colócate estable antes de tirar.",
      "Saca pecho sin exagerar la lumbar."
    ],
    "execution": [
      "Inicia el movimiento llevando los codos hacia atrás o hacia abajo.",
      "No tires solo con los brazos.",
      "Vuelve controlado, sin dejar que el peso te arrastre."
    ],
    "shoes": "Zapatilla plana o estable. En remos pesados, mejor plana/barefoot.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Remo en máquina",
      "Jalón neutro",
      "Remo con mancuerna"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 9,
    "name": "Remo con mancuerna",
    "category": "Espalda",
    "material": "Mancuerna + banco",
    "level": "Intermedio",
    "primary": "Espalda",
    "secondary": [
      "Bíceps",
      "Trapecio medio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Remo%20con%20mancuerna%20t%C3%A9cnica",
    "setup": [
      "Siéntate o colócate estable antes de tirar.",
      "Saca pecho sin exagerar la lumbar."
    ],
    "execution": [
      "Inicia el movimiento llevando los codos hacia atrás o hacia abajo.",
      "No tires solo con los brazos.",
      "Vuelve controlado, sin dejar que el peso te arrastre."
    ],
    "shoes": "Zapatilla plana o estable. En remos pesados, mejor plana/barefoot.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Remo en máquina",
      "Jalón neutro",
      "Remo con mancuerna"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 10,
    "name": "Dominadas asistidas",
    "category": "Espalda",
    "material": "Máquina asistida",
    "level": "Intermedio",
    "primary": "Espalda",
    "secondary": [
      "Bíceps",
      "Trapecio medio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Dominadas%20asistidas%20t%C3%A9cnica",
    "setup": [
      "Siéntate o colócate estable antes de tirar.",
      "Saca pecho sin exagerar la lumbar."
    ],
    "execution": [
      "Inicia el movimiento llevando los codos hacia atrás o hacia abajo.",
      "No tires solo con los brazos.",
      "Vuelve controlado, sin dejar que el peso te arrastre."
    ],
    "shoes": "Zapatilla plana o estable. En remos pesados, mejor plana/barefoot.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Remo en máquina",
      "Jalón neutro",
      "Remo con mancuerna"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 11,
    "name": "Pullover en polea",
    "category": "Espalda",
    "material": "Polea",
    "level": "Intermedio",
    "primary": "Espalda",
    "secondary": [
      "Bíceps",
      "Trapecio medio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Pullover%20en%20polea%20t%C3%A9cnica",
    "setup": [
      "Siéntate o colócate estable antes de tirar.",
      "Saca pecho sin exagerar la lumbar."
    ],
    "execution": [
      "Inicia el movimiento llevando los codos hacia atrás o hacia abajo.",
      "No tires solo con los brazos.",
      "Vuelve controlado, sin dejar que el peso te arrastre."
    ],
    "shoes": "Zapatilla plana o estable. En remos pesados, mejor plana/barefoot.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Remo en máquina",
      "Jalón neutro",
      "Remo con mancuerna"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 12,
    "name": "Remo en máquina",
    "category": "Espalda",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Espalda",
    "secondary": [
      "Bíceps",
      "Trapecio medio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Remo%20en%20m%C3%A1quina%20t%C3%A9cnica",
    "setup": [
      "Siéntate o colócate estable antes de tirar.",
      "Saca pecho sin exagerar la lumbar."
    ],
    "execution": [
      "Inicia el movimiento llevando los codos hacia atrás o hacia abajo.",
      "No tires solo con los brazos.",
      "Vuelve controlado, sin dejar que el peso te arrastre."
    ],
    "shoes": "Zapatilla plana o estable. En remos pesados, mejor plana/barefoot.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Remo en máquina",
      "Jalón neutro",
      "Remo con mancuerna"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 13,
    "name": "Press militar con mancuernas",
    "category": "Hombro",
    "material": "Mancuernas",
    "level": "Intermedio",
    "primary": "Hombro",
    "secondary": [
      "Tríceps",
      "Trapecio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Press%20militar%20con%20mancuernas%20t%C3%A9cnica",
    "setup": [
      "Si usas banco, ponlo casi vertical pero cómodo.",
      "Apoya bien la espalda y los pies."
    ],
    "execution": [
      "Mantén las costillas controladas, sin arquearte de más.",
      "Sube el peso sin impulsarte con el cuerpo.",
      "Baja despacio y mantén tensión."
    ],
    "shoes": "Zapatilla plana y estable. Evita suelas blandas si haces press de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Press en máquina",
      "Elevaciones laterales en polea",
      "Face pull"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 14,
    "name": "Elevaciones laterales",
    "category": "Hombro",
    "material": "Mancuernas",
    "level": "Principiante",
    "primary": "Hombro",
    "secondary": [
      "Tríceps",
      "Trapecio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Elevaciones%20laterales%20t%C3%A9cnica",
    "setup": [
      "Si usas banco, ponlo casi vertical pero cómodo.",
      "Apoya bien la espalda y los pies."
    ],
    "execution": [
      "Mantén las costillas controladas, sin arquearte de más.",
      "Sube el peso sin impulsarte con el cuerpo.",
      "Baja despacio y mantén tensión."
    ],
    "shoes": "Zapatilla plana y estable. Evita suelas blandas si haces press de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Press en máquina",
      "Elevaciones laterales en polea",
      "Face pull"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 15,
    "name": "Pájaros con mancuernas",
    "category": "Hombro",
    "material": "Mancuernas",
    "level": "Principiante",
    "primary": "Hombro",
    "secondary": [
      "Tríceps",
      "Trapecio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20P%C3%A1jaros%20con%20mancuernas%20t%C3%A9cnica",
    "setup": [
      "Si usas banco, ponlo casi vertical pero cómodo.",
      "Apoya bien la espalda y los pies."
    ],
    "execution": [
      "Mantén las costillas controladas, sin arquearte de más.",
      "Sube el peso sin impulsarte con el cuerpo.",
      "Baja despacio y mantén tensión."
    ],
    "shoes": "Zapatilla plana y estable. Evita suelas blandas si haces press de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Press en máquina",
      "Elevaciones laterales en polea",
      "Face pull"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 16,
    "name": "Face pull",
    "category": "Hombro",
    "material": "Polea + cuerda",
    "level": "Principiante",
    "primary": "Hombro",
    "secondary": [
      "Tríceps",
      "Trapecio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Face%20pull%20t%C3%A9cnica",
    "setup": [
      "Si usas banco, ponlo casi vertical pero cómodo.",
      "Apoya bien la espalda y los pies."
    ],
    "execution": [
      "Mantén las costillas controladas, sin arquearte de más.",
      "Sube el peso sin impulsarte con el cuerpo.",
      "Baja despacio y mantén tensión."
    ],
    "shoes": "Zapatilla plana y estable. Evita suelas blandas si haces press de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Press en máquina",
      "Elevaciones laterales en polea",
      "Face pull"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 17,
    "name": "Press hombro en máquina",
    "category": "Hombro",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Hombro",
    "secondary": [
      "Tríceps",
      "Trapecio"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Press%20hombro%20en%20m%C3%A1quina%20t%C3%A9cnica",
    "setup": [
      "Si usas banco, ponlo casi vertical pero cómodo.",
      "Apoya bien la espalda y los pies."
    ],
    "execution": [
      "Mantén las costillas controladas, sin arquearte de más.",
      "Sube el peso sin impulsarte con el cuerpo.",
      "Baja despacio y mantén tensión."
    ],
    "shoes": "Zapatilla plana y estable. Evita suelas blandas si haces press de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Press en máquina",
      "Elevaciones laterales en polea",
      "Face pull"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 18,
    "name": "Curl bíceps con barra",
    "category": "Bíceps",
    "material": "Barra",
    "level": "Principiante",
    "primary": "Bíceps",
    "secondary": [
      "Antebrazo"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Curl%20b%C3%ADceps%20con%20barra%20t%C3%A9cnica",
    "setup": [
      "Pies firmes al ancho de la cadera.",
      "Codos cerca del cuerpo."
    ],
    "execution": [
      "Sube sin balancear el tronco.",
      "Aprieta arriba sin mover los hombros hacia delante.",
      "Baja controlado hasta estirar bien el brazo."
    ],
    "shoes": "Cualquier calzado estable sirve. Mejor plano si haces curl de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Curl martillo",
      "Curl en polea",
      "Curl con mancuernas"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 19,
    "name": "Curl alterno con mancuernas",
    "category": "Bíceps",
    "material": "Mancuernas",
    "level": "Principiante",
    "primary": "Bíceps",
    "secondary": [
      "Antebrazo"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Curl%20alterno%20con%20mancuernas%20t%C3%A9cnica",
    "setup": [
      "Pies firmes al ancho de la cadera.",
      "Codos cerca del cuerpo."
    ],
    "execution": [
      "Sube sin balancear el tronco.",
      "Aprieta arriba sin mover los hombros hacia delante.",
      "Baja controlado hasta estirar bien el brazo."
    ],
    "shoes": "Cualquier calzado estable sirve. Mejor plano si haces curl de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Curl martillo",
      "Curl en polea",
      "Curl con mancuernas"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 20,
    "name": "Curl martillo",
    "category": "Bíceps",
    "material": "Mancuernas",
    "level": "Principiante",
    "primary": "Bíceps",
    "secondary": [
      "Antebrazo"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Curl%20martillo%20t%C3%A9cnica",
    "setup": [
      "Pies firmes al ancho de la cadera.",
      "Codos cerca del cuerpo."
    ],
    "execution": [
      "Sube sin balancear el tronco.",
      "Aprieta arriba sin mover los hombros hacia delante.",
      "Baja controlado hasta estirar bien el brazo."
    ],
    "shoes": "Cualquier calzado estable sirve. Mejor plano si haces curl de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Curl martillo",
      "Curl en polea",
      "Curl con mancuernas"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 21,
    "name": "Curl en banco inclinado",
    "category": "Bíceps",
    "material": "Mancuernas + banco",
    "level": "Intermedio",
    "primary": "Bíceps",
    "secondary": [
      "Antebrazo"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Curl%20en%20banco%20inclinado%20t%C3%A9cnica",
    "setup": [
      "Pies firmes al ancho de la cadera.",
      "Codos cerca del cuerpo."
    ],
    "execution": [
      "Sube sin balancear el tronco.",
      "Aprieta arriba sin mover los hombros hacia delante.",
      "Baja controlado hasta estirar bien el brazo."
    ],
    "shoes": "Cualquier calzado estable sirve. Mejor plano si haces curl de pie.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Curl martillo",
      "Curl en polea",
      "Curl con mancuernas"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 22,
    "name": "Extensión tríceps en polea",
    "category": "Tríceps",
    "material": "Polea + cuerda",
    "level": "Principiante",
    "primary": "Tríceps",
    "secondary": [
      "Hombro",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Extensi%C3%B3n%20tr%C3%ADceps%20en%20polea%20t%C3%A9cnica",
    "setup": [
      "Colócate estable antes de empezar.",
      "Mantén los codos fijos, sin abrirlos continuamente."
    ],
    "execution": [
      "Extiende el brazo hasta notar el tríceps.",
      "Controla la vuelta, no dejes que la polea te suba sola.",
      "No uses el cuerpo para empujar el peso."
    ],
    "shoes": "Calzado estable. Mejor plano si estás de pie en polea.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Polea con cuerda",
      "Fondos asistidos",
      "Extensión unilateral"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 23,
    "name": "Press francés con barra Z",
    "category": "Tríceps",
    "material": "Barra Z + banco",
    "level": "Intermedio",
    "primary": "Tríceps",
    "secondary": [
      "Hombro",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Press%20franc%C3%A9s%20con%20barra%20Z%20t%C3%A9cnica",
    "setup": [
      "Colócate estable antes de empezar.",
      "Mantén los codos fijos, sin abrirlos continuamente."
    ],
    "execution": [
      "Extiende el brazo hasta notar el tríceps.",
      "Controla la vuelta, no dejes que la polea te suba sola.",
      "No uses el cuerpo para empujar el peso."
    ],
    "shoes": "Calzado estable. Mejor plano si estás de pie en polea.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Polea con cuerda",
      "Fondos asistidos",
      "Extensión unilateral"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 24,
    "name": "Fondos asistidos",
    "category": "Tríceps",
    "material": "Máquina asistida",
    "level": "Intermedio",
    "primary": "Tríceps",
    "secondary": [
      "Hombro",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Fondos%20asistidos%20t%C3%A9cnica",
    "setup": [
      "Colócate estable antes de empezar.",
      "Mantén los codos fijos, sin abrirlos continuamente."
    ],
    "execution": [
      "Extiende el brazo hasta notar el tríceps.",
      "Controla la vuelta, no dejes que la polea te suba sola.",
      "No uses el cuerpo para empujar el peso."
    ],
    "shoes": "Calzado estable. Mejor plano si estás de pie en polea.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Polea con cuerda",
      "Fondos asistidos",
      "Extensión unilateral"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 25,
    "name": "Extensión tríceps por encima de la cabeza",
    "category": "Tríceps",
    "material": "Polea o mancuerna",
    "level": "Intermedio",
    "primary": "Tríceps",
    "secondary": [
      "Hombro",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Extensi%C3%B3n%20tr%C3%ADceps%20por%20encima%20de%20la%20cabeza%20t%C3%A9cnica",
    "setup": [
      "Colócate estable antes de empezar.",
      "Mantén los codos fijos, sin abrirlos continuamente."
    ],
    "execution": [
      "Extiende el brazo hasta notar el tríceps.",
      "Controla la vuelta, no dejes que la polea te suba sola.",
      "No uses el cuerpo para empujar el peso."
    ],
    "shoes": "Calzado estable. Mejor plano si estás de pie en polea.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Polea con cuerda",
      "Fondos asistidos",
      "Extensión unilateral"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 26,
    "name": "Sentadilla con barra",
    "category": "Pierna",
    "material": "Barra + rack",
    "level": "Intermedio",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Sentadilla%20con%20barra%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 27,
    "name": "Prensa inclinada",
    "category": "Pierna",
    "material": "Prensa",
    "level": "Principiante",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Prensa%20inclinada%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 28,
    "name": "Extensión de cuádriceps",
    "category": "Pierna",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Extensi%C3%B3n%20de%20cu%C3%A1driceps%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 29,
    "name": "Curl femoral tumbado",
    "category": "Pierna",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Curl%20femoral%20tumbado%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 30,
    "name": "Peso muerto rumano",
    "category": "Pierna",
    "material": "Barra o mancuernas",
    "level": "Intermedio",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Peso%20muerto%20rumano%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 31,
    "name": "Zancadas caminando",
    "category": "Pierna",
    "material": "Mancuernas",
    "level": "Intermedio",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Zancadas%20caminando%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 32,
    "name": "Sentadilla goblet",
    "category": "Pierna",
    "material": "Mancuerna o kettlebell",
    "level": "Principiante",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Sentadilla%20goblet%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 33,
    "name": "Gemelo en máquina",
    "category": "Pierna",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Pierna",
    "secondary": [
      "Glúteo",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Gemelo%20en%20m%C3%A1quina%20t%C3%A9cnica",
    "setup": [
      "Coloca los pies firmes y no los muevas durante la serie.",
      "Controla la bajada."
    ],
    "execution": [
      "No hundas las rodillas hacia dentro.",
      "Empuja el suelo o la plataforma con intención.",
      "Mantén el tronco estable durante todo el recorrido."
    ],
    "shoes": "Sentadilla/prensa: zapatilla plana o halterofilia. Peso muerto rumano: barefoot o plana. Evita running blanda.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Prensa",
      "Sentadilla goblet",
      "Extensión/cuádriceps"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 34,
    "name": "Hip thrust con barra",
    "category": "Glúteo",
    "material": "Barra + banco",
    "level": "Intermedio",
    "primary": "Glúteo",
    "secondary": [
      "Femoral",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Hip%20thrust%20con%20barra%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco estable si lo necesitas.",
      "Apoya bien los pies y empuja desde el talón/mediopié."
    ],
    "execution": [
      "Mantén la pelvis controlada.",
      "Sube apretando glúteo, no tirando de lumbar.",
      "Baja controlado y repite sin perder posición."
    ],
    "shoes": "Zapatilla plana o barefoot. Evita suelas blandas.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Puente glúteo",
      "Abducción máquina",
      "Patada polea"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 35,
    "name": "Puente de glúteo",
    "category": "Glúteo",
    "material": "Peso corporal o barra",
    "level": "Principiante",
    "primary": "Glúteo",
    "secondary": [
      "Femoral",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Puente%20de%20gl%C3%BAteo%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco estable si lo necesitas.",
      "Apoya bien los pies y empuja desde el talón/mediopié."
    ],
    "execution": [
      "Mantén la pelvis controlada.",
      "Sube apretando glúteo, no tirando de lumbar.",
      "Baja controlado y repite sin perder posición."
    ],
    "shoes": "Zapatilla plana o barefoot. Evita suelas blandas.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Puente glúteo",
      "Abducción máquina",
      "Patada polea"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 36,
    "name": "Patada de glúteo en polea",
    "category": "Glúteo",
    "material": "Polea baja",
    "level": "Principiante",
    "primary": "Glúteo",
    "secondary": [
      "Femoral",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Patada%20de%20gl%C3%BAteo%20en%20polea%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco estable si lo necesitas.",
      "Apoya bien los pies y empuja desde el talón/mediopié."
    ],
    "execution": [
      "Mantén la pelvis controlada.",
      "Sube apretando glúteo, no tirando de lumbar.",
      "Baja controlado y repite sin perder posición."
    ],
    "shoes": "Zapatilla plana o barefoot. Evita suelas blandas.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Puente glúteo",
      "Abducción máquina",
      "Patada polea"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 37,
    "name": "Abducción en máquina",
    "category": "Glúteo",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Glúteo",
    "secondary": [
      "Femoral",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Abducci%C3%B3n%20en%20m%C3%A1quina%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco estable si lo necesitas.",
      "Apoya bien los pies y empuja desde el talón/mediopié."
    ],
    "execution": [
      "Mantén la pelvis controlada.",
      "Sube apretando glúteo, no tirando de lumbar.",
      "Baja controlado y repite sin perder posición."
    ],
    "shoes": "Zapatilla plana o barefoot. Evita suelas blandas.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Puente glúteo",
      "Abducción máquina",
      "Patada polea"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 38,
    "name": "Step up",
    "category": "Glúteo",
    "material": "Cajón + mancuernas",
    "level": "Intermedio",
    "primary": "Glúteo",
    "secondary": [
      "Femoral",
      "Core"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Step%20up%20t%C3%A9cnica",
    "setup": [
      "Coloca el banco estable si lo necesitas.",
      "Apoya bien los pies y empuja desde el talón/mediopié."
    ],
    "execution": [
      "Mantén la pelvis controlada.",
      "Sube apretando glúteo, no tirando de lumbar.",
      "Baja controlado y repite sin perder posición."
    ],
    "shoes": "Zapatilla plana o barefoot. Evita suelas blandas.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Puente glúteo",
      "Abducción máquina",
      "Patada polea"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 39,
    "name": "Plancha abdominal",
    "category": "Core",
    "material": "Peso corporal",
    "level": "Principiante",
    "primary": "Core",
    "secondary": [
      "Abdomen",
      "Oblicuos"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Plancha%20abdominal%20t%C3%A9cnica",
    "setup": [
      "Colócate como si fueras a recibir un golpe suave en la barriga.",
      "Mantén la pelvis controlada."
    ],
    "execution": [
      "No busques hacerlo rápido.",
      "Respira sin perder tensión.",
      "Para antes de que la técnica se rompa."
    ],
    "shoes": "No es importante. Usa calzado cómodo y estable.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Dead bug",
      "Pallof press",
      "Plancha"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 40,
    "name": "Crunch en máquina",
    "category": "Core",
    "material": "Máquina",
    "level": "Principiante",
    "primary": "Core",
    "secondary": [
      "Abdomen",
      "Oblicuos"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Crunch%20en%20m%C3%A1quina%20t%C3%A9cnica",
    "setup": [
      "Colócate como si fueras a recibir un golpe suave en la barriga.",
      "Mantén la pelvis controlada."
    ],
    "execution": [
      "No busques hacerlo rápido.",
      "Respira sin perder tensión.",
      "Para antes de que la técnica se rompa."
    ],
    "shoes": "No es importante. Usa calzado cómodo y estable.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Dead bug",
      "Pallof press",
      "Plancha"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 41,
    "name": "Elevación de piernas",
    "category": "Core",
    "material": "Banco o suelo",
    "level": "Intermedio",
    "primary": "Core",
    "secondary": [
      "Abdomen",
      "Oblicuos"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Elevaci%C3%B3n%20de%20piernas%20t%C3%A9cnica",
    "setup": [
      "Colócate como si fueras a recibir un golpe suave en la barriga.",
      "Mantén la pelvis controlada."
    ],
    "execution": [
      "No busques hacerlo rápido.",
      "Respira sin perder tensión.",
      "Para antes de que la técnica se rompa."
    ],
    "shoes": "No es importante. Usa calzado cómodo y estable.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Dead bug",
      "Pallof press",
      "Plancha"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 42,
    "name": "Pallof press",
    "category": "Core",
    "material": "Polea o goma",
    "level": "Intermedio",
    "primary": "Core",
    "secondary": [
      "Abdomen",
      "Oblicuos"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Pallof%20press%20t%C3%A9cnica",
    "setup": [
      "Colócate como si fueras a recibir un golpe suave en la barriga.",
      "Mantén la pelvis controlada."
    ],
    "execution": [
      "No busques hacerlo rápido.",
      "Respira sin perder tensión.",
      "Para antes de que la técnica se rompa."
    ],
    "shoes": "No es importante. Usa calzado cómodo y estable.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Dead bug",
      "Pallof press",
      "Plancha"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  },
  {
    "id": 43,
    "name": "Dead bug",
    "category": "Core",
    "material": "Peso corporal",
    "level": "Principiante",
    "primary": "Core",
    "secondary": [
      "Abdomen",
      "Oblicuos"
    ],
    "youtube": "https://www.youtube.com/results?search_query=Diego%20YugeTrainer%20Dead%20bug%20t%C3%A9cnica",
    "setup": [
      "Colócate como si fueras a recibir un golpe suave en la barriga.",
      "Mantén la pelvis controlada."
    ],
    "execution": [
      "No busques hacerlo rápido.",
      "Respira sin perder tensión.",
      "Para antes de que la técnica se rompa."
    ],
    "shoes": "No es importante. Usa calzado cómodo y estable.",
    "errors": [
      "Hacerlo con prisas y perder el control.",
      "Mover pies o cadera sin necesidad.",
      "Usar más peso del que puedes controlar.",
      "Acortar el recorrido para levantar más.",
      "No repetir la misma técnica en cada repetición."
    ],
    "alternatives": [
      "Dead bug",
      "Pallof press",
      "Plancha"
    ],
    "tip": "No necesitas mil ejercicios nuevos cada semana. Necesitas entender este, hacerlo bien y progresar con cabeza."
  }
];
const categories = ['Todos','Pecho','Espalda','Hombro','Bíceps','Tríceps','Pierna','Glúteo','Core'];
let currentCategory = 'Todos';
let currentId = exercises[0].id;

const login = document.getElementById('login');
const app = document.getElementById('app');
const enterBtn = document.getElementById('enterBtn');
const accessCode = document.getElementById('accessCode');
const loginMsg = document.getElementById('loginMsg');
const filters = document.getElementById('filters');
const exerciseList = document.getElementById('exerciseList');
const detail = document.getElementById('detail');
const search = document.getElementById('search');

function enter(){
  if(accessCode.value.trim() === ACCESS_CODE){
    login.classList.add('hidden'); app.classList.remove('hidden'); renderFilters(); renderList(); renderDetail(currentId);
    localStorage.setItem('hsb_access','ok');
  } else { loginMsg.textContent='Código incorrecto. Contacta con Diego.'; }
}
if(localStorage.getItem('hsb_access')==='ok'){ login.classList.add('hidden'); app.classList.remove('hidden'); }
enterBtn.addEventListener('click', enter);
accessCode.addEventListener('keydown', e=>{ if(e.key==='Enter') enter(); });

function renderFilters(){
  filters.innerHTML = categories.map(c=>`<button class="filter-btn ${c===currentCategory?'active':''}" onclick="setCategory('${c}')">${c}</button>`).join('');
}
window.setCategory = c => { currentCategory=c; renderFilters(); renderList(); };
search.addEventListener('input', renderList);

function filtered(){
  const q = search.value.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  return exercises.filter(e=>{
    const okCat = currentCategory==='Todos' || e.category===currentCategory;
    const text = (e.name+' '+e.category+' '+e.material).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
    return okCat && text.includes(q);
  });
}
function renderList(){
  const list = filtered();
  exerciseList.innerHTML = list.map(e=>`<div class="exercise-item ${e.id===currentId?'active':''}" onclick="renderDetail(${e.id})"><strong>${e.name}</strong><span>${e.category} · ${e.material} · ${e.level}</span></div>`).join('') || '<p>No hay ejercicios con ese filtro.</p>';
}
function anatomy(cat){
  const active = r => cat===r ? 'active-muscle' : 'muscle';
  return `<div class="anatomy"><svg viewBox="0 0 220 360" aria-label="Figura anatómica">
    <circle cx="110" cy="32" r="22" class="bodyline"/>
    <path d="M110 55 L110 118" class="bodyline"/><path d="M62 92 L158 92" class="bodyline"/>
    <path d="M86 118 L65 205" class="bodyline"/><path d="M134 118 L155 205" class="bodyline"/>
    <path d="M86 210 L75 320" class="bodyline"/><path d="M134 210 L145 320" class="bodyline"/>
    <ellipse cx="88" cy="92" rx="24" ry="21" class="${active('Pecho')}"/><ellipse cx="132" cy="92" rx="24" ry="21" class="${active('Pecho')}"/>
    <ellipse cx="110" cy="104" rx="42" ry="52" class="${active('Espalda')}" opacity=".85"/>
    <circle cx="62" cy="90" r="18" class="${active('Hombro')}"/><circle cx="158" cy="90" r="18" class="${active('Hombro')}"/>
    <ellipse cx="46" cy="130" rx="13" ry="30" class="${active('Bíceps')}"/><ellipse cx="174" cy="130" rx="13" ry="30" class="${active('Tríceps')}"/>
    <ellipse cx="82" cy="165" rx="21" ry="35" class="${active('Glúteo')}"/><ellipse cx="138" cy="165" rx="21" ry="35" class="${active('Glúteo')}"/>
    <ellipse cx="82" cy="245" rx="20" ry="60" class="${active('Pierna')}"/><ellipse cx="138" cy="245" rx="20" ry="60" class="${active('Pierna')}"/>
    <rect x="91" y="112" width="38" height="62" rx="18" class="${active('Core')}"/>
  </svg></div>`;
}
function renderDetail(id){
  currentId=id; const e=exercises.find(x=>x.id===id); renderList();
  detail.innerHTML = `<div class="detail-head"><div><p class="eyebrow">${e.category}</p><h2>${e.name}</h2><div class="tags"><span class="tag">Principal: ${e.primary}</span>${e.secondary.map(s=>`<span class="tag">Secundario: ${s}</span>`).join('')}<span class="tag">${e.level}</span></div><a class="video-link" target="_blank" href="${e.youtube}">▶ Ver vídeo en YouTube</a></div>${anatomy(e.category)}</div>
  <div class="grid">
    <section class="card"><h3>Material</h3><p>${e.material}</p></section>
    <section class="card"><h3>Calzado recomendado</h3><p>${e.shoes}</p></section>
    <section class="card"><h3>Preparación / colocación</h3><ul class="good">${e.setup.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    <section class="card"><h3>Ejecución simple</h3><ol>${e.execution.map(x=>`<li>${x}</li>`).join('')}</ol></section>
    <section class="card"><h3>Errores frecuentes</h3><ul class="bad">${e.errors.map(x=>`<li>${x}</li>`).join('')}</ul></section>
    <section class="card"><h3>Alternativas</h3><ul>${e.alternatives.map(x=>`<li>${x}</li>`).join('')}</ul></section>
  </div><div class="note"><strong>Consejo HSB:</strong> ${e.tip}</div>`;
}
renderFilters(); renderList(); renderDetail(currentId);

