<template>
    <div class="circular-progress">
        <svg viewBox="0 0 36 36" class="circular-chart">
            <path class="circle" :stroke-dasharray="progress + ', 100'" d="M18 2.0845
                             a 15.9155 15.9155 0 0 1 0 31.831
                             a 15.9155 15.9155 0 0 1 0 -31.831" />
        </svg>
        <div class="progress-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CircularProgressBar',
    props: {
        progress: {
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>
.circular-progress {
    position: relative;

}

.circular-chart {
    position: absolute;
    display: block;
    margin: 10px auto;
}

.circle {
    fill: none;
    stroke-width: 0.5;
    stroke: #ffffff;
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
}
.progress-content{
    display: flex;
    height: 100%;
    align-content: center;
    justify-content: center;
}
</style>