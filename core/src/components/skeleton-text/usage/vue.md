```html
<template>
  <!-- Data to display after skeleton screen -->
  <div v-if="data">
    <div class="syg-padding">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros est. Cras iaculis pulvinar arcu non vehicula. Fusce at quam a eros malesuada condimentum. Aliquam tincidunt tincidunt vehicula.
    </div>

    <syg-list>
      <syg-list-header>
        <syg-label>
          Data
        </syg-label>
      </syg-list-header>
      <syg-item>
        <syg-avatar slot="start">
          <img src="./avatar.svg">
        </syg-avatar>
        <syg-label>
          <h3>
            {{ data.heading }}
          </h3>
          <p>
            {{ data.para1 }}
          </p>
          <p>
            {{ data.para2 }}
          </p>
        </syg-label>
      </syg-item>
      <syg-item>
        <syg-thumbnail slot="start">
          <img src="./thumbnail.svg">
        </syg-thumbnail>
        <syg-label>
          <h3>
            {{ data.heading }}
          </h3>
          <p>
            {{ data.para1 }}
          </p>
          <p>
            {{ data.para2 }}
          </p>
        </syg-label>
      </syg-item>
      <syg-item>
        <ion-icon :icon="call" slot="start"></ion-icon>
        <syg-label>
          <h3>
            {{ data.heading }}
          </h3>
          <p>
            {{ data.para1 }}
          </p>
          <p>
            {{ data.para2 }}
          </p>
        </syg-label>
      </syg-item>
    </syg-list>
  </div>

  <!-- Skeleton screen -->
  <div v-if="!data">
    <div class="syg-padding custom-skeleton">
      <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
      <syg-skeleton-text animated></syg-skeleton-text>
      <syg-skeleton-text animated style="width: 88%"></syg-skeleton-text>
      <syg-skeleton-text animated style="width: 70%"></syg-skeleton-text>
      <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
    </div>

    <syg-list>
      <syg-list-header>
        <syg-label>
          <syg-skeleton-text animated style="width: 20%"></syg-skeleton-text>
        </syg-label>
      </syg-list-header>
      <syg-item>
        <syg-avatar slot="start">
          <syg-skeleton-text animated></syg-skeleton-text>
        </syg-avatar>
        <syg-label>
          <h3>
            <syg-skeleton-text animated style="width: 50%"></syg-skeleton-text>
          </h3>
          <p>
            <syg-skeleton-text animated style="width: 80%"></syg-skeleton-text>
          </p>
          <p>
            <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
          </p>
        </syg-label>
      </syg-item>
      <syg-item>
        <syg-thumbnail slot="start">
          <syg-skeleton-text animated></syg-skeleton-text>
        </syg-thumbnail>
        <syg-label>
          <h3>
            <syg-skeleton-text animated style="width: 50%"></syg-skeleton-text>
          </h3>
          <p>
            <syg-skeleton-text animated style="width: 80%"></syg-skeleton-text>
          </p>
          <p>
            <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
          </p>
        </syg-label>
      </syg-item>
      <syg-item>
        <syg-skeleton-text animated style="width: 27px; height: 27px" slot="start"></syg-skeleton-text>
        <syg-label>
          <h3>
            <syg-skeleton-text animated style="width: 50%"></syg-skeleton-text>
          </h3>
          <p>
            <syg-skeleton-text animated style="width: 80%"></syg-skeleton-text>
          </p>
          <p>
            <syg-skeleton-text animated style="width: 60%"></syg-skeleton-text>
          </p>
        </syg-label>
      </syg-item>
    </syg-list>
  </div>
</template>

<style>
  /* Custom Skeleton Line Height and Margin */
  .custom-skeleton syg-skeleton-text {
    line-height: 13px;
  }

  .custom-skeleton syg-skeleton-text:last-child {
    margin-bottom: 5px;
  }
</style>

<script>
import {
  IonAvatar,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSkeletonText,
  IonThumbnail
} from '@ionic/vue';
import { call } from 'ionicons/icons';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonAvatar,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonSkeletonText,
    IonThumbnail
  },
  setup() {
    const data = ref();

    setTimeout(() => {
      data.value = {
        'heading': 'Normal text',
        'para1': 'Lorem ipsum dolor sit amet, consectetur',
        'para2': 'adipiscing elit.'
      };
    }, 5000);

    return { data }
  }
});
</script>
```