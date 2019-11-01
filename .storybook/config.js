import { configure } from '@storybook/vue';

configure(require.context('../testing', true, /\.stories\.js$/), module);
