import puppeteer from 'puppeteer';

describe('End to End HTML Tests', function(){
  let browser:puppeteer.Browser;
  let page:puppeteer.Page;
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  describe('Basic JSONA Test',()=>{
    it('should render the page and navigate links', async()=>{
      await page.goto(`file://${__dirname}/examples/basic_jsona_app.html`,{
        waitUntil: 'networkidle2',
      });
      const initialPageData = await page.evaluate(()=>{
        const titleText = document.querySelector('title')?.innerHTML
        return {titleText};
      });
      expect(initialPageData.titleText).toBe('Basic JSONA App');
      const pageContent = await page.content();
      expect(pageContent.includes('<div>hello world!!!</div>')).toBe(true);
      await page.$eval('[href="#/page-2"]',(el:any)=>el.click());
      const page2Content = await page.content();
      expect(page2Content.includes('<header>page-2 header</header><main><div>page 2!!!</div>')).toBe(true);
      const page2Title = await page.$eval('title',(el:any)=>el.innerText);
      expect(page2Title).toBe('Page 2');
      await page.$eval('[href="#/page-3"]',(el:any)=>el.click());
      const page3Content = await page.content();
      expect(page3Content.includes('<header>page-3 header</header><div><h1>Not Found</h1><div>/page-3</div>')).toBe(true);
      const page3url = page.url();
      expect(page3url.includes('page-3')).toBe(true);
      await page.goBack();
      const backToPage2url = page.url();
      expect(backToPage2url.includes('page-2')).toBe(true);
    });
  });
});