# RateIt

Com este componente você poderá exibir em sua aplicações avaliações baseadas em números inteiros ou gera-las.
Customizável, seja trocando os ícones que representam os valores, cores ou mesmo o *range* de notas.

Desenvolvido com angular versão 7.2.0

# Instalação
Instalação do pacote:
```
npm i rate-it
```

Adicionando referência:
```ts
import { RateItModule } from 'rate-it';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RateItModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Bindings
```html
<ng-rate-it
  [range]="5"
  [isLocked]="false"
  [initialRate]="initialValue"
  [placeholderIconClass]="'far fa-star'"
  [rateIconClass]="'fas fa-star'"
  (onChangeRate)="changeRate($event)">
</ng-rate-it>
```
- ### Inputs
    - **range** *(number, default = 5)* - range de notas disponíveis para avaliação;
    - **isLocked** *(boolean, default = false)* - não recebe ação, somente exibição;
    - **initialRate** *(number, default = 1)* - nota inicial;
    - **placeholderIconClass** *(string, default = &#x2606;)* - classe de estilo com o ícone do range de notas;
    - **rateIconClass** *(string, default = &#x2605;)* - classe de estilo com o ícone de avaliação dada.
- ### Outputs
    - **onChangeRate** *(function)* - callback com a nota selecionada.


 Quase todos os bindings são opcionais, exceto **onChangeRate**, podendo assim instânciar o componente como:
 ```html
 <ng-rate-it (onChangeRate)="changeRate($event)"></ng-rate-it>
 ```
