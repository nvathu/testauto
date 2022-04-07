import { cpSync } from 'fs';
import { Selector, test } from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

fixture `marketpage`;

// export default class searchHeader {
//     constructor() {
//       this.counterButton = ReactSelector("CardButton");
//       this.button = this.counterButton.find("button");
//     }

test
    .page `http://localhost:3000/`
    ('Test1', async t => {
        // const search_header = Selector('.MuiInputBase-input.makeStyles-inputInput-8');
        const search_header = ReactSelector('Modal SearchPopup InputBase').withProps('priority', 'High')
        
        
        const search = Selector(`.MuiInputBase-input-56.makeStyles-inputInput-31`)
        
        const check = Selector(".MuiBackdrop-root.css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop")
        const state = await check()
        await t
        .click(search_header)
        .wait(7000)
        // console.log(state.hasAttribute('visibility'))
        // .expect(check.state).notContains("hidden",{ timeout: 7000 })
        .typeText(search_header,'ACB')
        .wait(7000)
        .pressKey('enter')
        

    });
// test
//     .page `http://localhost:4040/api/stocks`
//     ('Test2', async t => {
//         console.log('back');
//     });