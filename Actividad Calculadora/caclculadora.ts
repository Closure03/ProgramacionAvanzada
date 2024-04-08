// Definición de la clase Calculator
class Calculator {
    // Métodos para realizar operaciones matemáticas básicas
    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }

    multiply(x: number, y: number): number {
        return x * y;
    }

    divide(x: number, y: number): number {
        if (y === 0) {
            throw new Error('No se puede dividir por cero');
        }
        return x / y;
    }
}
