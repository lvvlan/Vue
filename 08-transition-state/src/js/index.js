/**
 * Des
 * Created by luowei5 on 2016/11/29.
 * E-mail luowei5@jd.com
 * Update 2016/11/29
 */

new Vue({
    el: '#animated-number-demo',
    data: {
        number: 0,
        animatedNumber: 0
    },
    watch: {
        number(newValue, oldValue) {
            console.log(`newValue: ${newValue} --- oldValue: ${oldValue}`);
            let vm = this;
            function animate(time){
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            new TWEEN.Tween({tweeningNumber: oldValue})
                .easing(TWEEN.Easing.Quadratic.Out)
                .to({tweeningNumber: newValue}, 500)
                .onUpdate(function (){
                    vm.animatedNumber = this.tweeningNumber.toFixed(0)
                })
                .start();

            animate();
        }
    }
});

const Color = net.brehaut.Color;

new Vue({
    el: '#changeColor',
    data: {
        colorQuery: '',
        color: {
            red: 0,
            green: 0,
            blue: 0,
            alpha: 1
        },
        tweenedColor: {}
    },
    created() {
        this.tweenedColor = this.color;
    },
    watch: {
        color() {
            function animate(time){
                requestAnimationFrame(animate);
                TWEEN.update(time)
            }
            
            new TWEEN.Tween(this.tweenedColor)
                .to(this.color, 750)
                .start();
            
            animate();
        }
    },
    computed: {
        tweenedCSSColor() {
            console.log(1);
            return new Color(this.tweenedColor).toCSS();
        }
    },
    methods: {
        updateColor() {
            this.color = new Color(this.colorQuery).toRGB();
            this.colorQuery = '';
        }
    }
});

Vue.component('animated-integer', {
    template: '<span>{{tweeningValue}}</span>',
    props: {
        value: {
            type: Number,
            required: true
        }
    },
    data() {
        return {tweeningValue: 0}
    },
    watch: {
        value(newValue, oldValue) {
            this.tween(oldValue, newValue);
        }
    },
    mounted() {
        this.tween(0, this.value);
    },
    methods: {
        tween(startValue, endValue) {
            let vm = this;

            function animate(time){
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }

            new TWEEN.Tween({tweeningValue: startValue})
                .to({tweeningValue: endValue}, 500)
                .onUpdate(function (){
                    vm.tweeningValue = this.tweeningValue.toFixed(0);
                })
                .start();

            animate();
        }
    }
});

new Vue({
    el: '#sum',
    data: {
        firstNumber: 20,
        secondNumber: 20
    },
    computed: {
        result() {
            return this.firstNumber + this.secondNumber;
        }
    }
});