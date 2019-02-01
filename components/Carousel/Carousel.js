class Carousel {
    constructor(carousel) {
        // Element
        this.element = carousel;

        // Left and right buttons
        this.left = this.element.querySelector('.left-button');
        this.right = this.element.querySelector('.right-button');

        // Image array
        this.images = Array.from(this.element.querySelectorAll('img'));

        // Invoke current index
        this.select();

        // Button event listeners.
        this.left.addEventListener('click', () => this.pop());
        this.right.addEventListener('click', () => this.shift());
    }

    pop() {
        this.deselect();
        const image = this.images.pop();
        this.images.unshift(image);
        this.select();
    }

    shift() {
        this.deselect();
        const image = this.images.shift();
        this.images.push(image);
        this.select();
    }

    deselect() {
        this.current.style.display = 'none';
    }

    select() {
        this.current = this.images[0];
        this.current.style.display = 'block';
    }

    // select(direction) {
    //     this.current.style.display = 'none';
    //     if (direction === 'left') {
    //         const image = this.images.pop();
    //         this.images.unshift(image);
    //     } else if (direction === 'right') {
    //         const image = this.images.shift();
    //         this.images.push(image);
    //     }

    //     this.current = this.images[0];

    //     console.log(this.images);
    //     console.log(this.current);
    //     this.current.style.display = 'block';
    // }
}

let carousel = document.querySelector('.carousel');
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/