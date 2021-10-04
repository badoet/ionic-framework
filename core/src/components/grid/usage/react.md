```tsx
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

export const GridExample: React.FC = () => (
  <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6">syg-col size="6"</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol>syg-col</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">syg-col size="3"</IonCol>
        <IonCol>syg-col</IonCol>
        <IonCol size="3">syg-col size="3"</IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="3">syg-col size="3"</IonCol>
        <IonCol size="3" offset="3">
          syg-col size="3" offset="3"
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>syg-col</IonCol>
        <IonCol>
          syg-col
          <br />#
        </IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol className="syg-align-self-start">syg-col start</IonCol>
        <IonCol className="syg-align-self-center">syg-col center</IonCol>
        <IonCol className="syg-align-self-end">syg-col end</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="syg-align-items-start">
        <IonCol>start syg-col</IonCol>
        <IonCol>start syg-col</IonCol>
        <IonCol className="syg-align-self-end">start syg-col end</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="syg-align-items-center">
        <IonCol>center syg-col</IonCol>
        <IonCol>center syg-col</IonCol>
        <IonCol>center syg-col</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow className="syg-align-items-end">
        <IonCol>end syg-col</IonCol>
        <IonCol className="syg-align-self-start">end syg-col start</IonCol>
        <IonCol>end syg-col</IonCol>
        <IonCol>
          syg-col
          <br />#
          <br />#
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
        <IonCol size="12" size-sm>
          syg-col size="12" size-sm
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
        <IonCol size="12" size-md>
          syg-col size="12" size-md
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol size="6" size-lg offset="3">
          syg-col size="6" size-lg offset="3"
        </IonCol>
        <IonCol size="3" size-lg>
          syg-col size="3" size-lg
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
);
```