let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this; // Повертаємо об'єкт ladder
    },
    down: function () {
        this.step--;
        return this; // Повертаємо об'єкт ladder
    },
    showStep: function () {
        console.log(this.step); // Показуємо поточну сходинку
        return this; // Повертаємо об'єкт ladder
    }
};

// Виклик методів по ланцюжку
ladder.up().up().up().up().up().up().up().down().down().down().showStep(); // Результат: 1
