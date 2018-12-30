let previous_nums = [0];
let current_location = 0;
let current_addition = 1;
let reps = 200;
let width = window.innerWidth;
let height = window.innerHeight;
let scale_factor = 1;
let biggest = 0;

function main() {
    run_sequence();
    reset_scale();
    scale_nums();
    draw();

}

function reset_scale() {
    scale_factor = width / biggest;
}


function scale_nums() {

    for (let index = 0; index < previous_nums.length; index++) {
        previous_nums[index] *= scale_factor;
    }
}

function draw() {
    createCanvas(width, height);
    background(0);
    stroke(255);
    strokeWeight(.5);
    noFill();
    // arc(50, height / 2, 100, 100, PI, 0);
    for (let index = 0; index < previous_nums.length - 1; index++) {
        let x = (previous_nums[index + 1] + previous_nums[index]) / 2;
        let diameter = previous_nums[index + 1] - previous_nums[index];
        let flip = index % 2;
        if (flip) {
            arc(x, height / 2, diameter, diameter, PI, 0);
        }
        else {
            arc(x, height / 2, diameter, diameter, 0, PI);
        }
    }
}

function run_sequence() {
    for (let index = 0; index < reps; index++) {
        recaman_sequence();
    }
}

function recaman_sequence() {
    const next_number = current_location - current_addition;

    if (previous_nums.includes(next_number) || next_number <= 0) {
        current_location += current_addition;
    }
    else {
        current_location = next_number;
    }

    previous_nums.push(current_location);

    if (current_location > biggest) {
        biggest = current_location;
    }

    current_addition++;
}