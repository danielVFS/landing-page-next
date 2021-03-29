import {
  mapSectionTwoColumns,
  mapSections,
  mapSectionContent,
  mapTextGrid,
  mapImageGrid,
} from './map-sections';

import fake_data from './fake-data.json';

describe('map-sections', () => {
  it('should render predefined section if no data', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should render section with correct data', () => {
    const data = mapSections(fake_data[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const withNoComponent = mapSections([{}]);

    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(withNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid(image and text) with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);

    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two columns with no data', () => {
    const data = mapSectionTwoColumns();

    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'title',
      description: 'abc',
      metadata: {
        background: true,
        section_id: 'contact',
      },
      image: {
        url: 'a.svg',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('contact');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('abc');
    expect(data.title).toBe('title');
  });

  it('should map section two columns with no data', () => {
    const data = mapSectionContent();

    expect(data.component).toBe('');
    expect(data.title).toBe('');
    expect(data.html).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      content:
        '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news</p>',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    });

    expect(data.component).toBe('section.section-content');
    expect(data.title).toBe('news coverage and some surprises');
    expect(data.html).toBe(
      '<p>The release of Apple Silicon-based Macs at the end of last year generated a flurry of news</p>',
    );
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('intro');
  });

  it('should map grid text with no data', () => {
    const data = mapTextGrid();

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'Debitis cum delectus molestias.',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Lorem ipsum dolor sit',
        },
        {
          title: 'Teste 2',
          description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(data.component).toBe('section.section-grid-text');
    expect(data.title).toBe('My Grid');
    expect(data.description).toBe('Debitis cum delectus molestias.');
    expect(data.background).toBe(true);
    expect(data.sectionId).toBe('grid-one');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Lorem ipsum dolor sit');
    expect(data.grid[1].title).toBe('Teste 2');
    expect(data.grid[1].description).toBe(
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    );
  });

  it('should map grid image with no data', () => {
    const data = mapImageGrid();

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.grid).toEqual([]);
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'Distinctio veritatis unde',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'alText',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.component).toBe('section.section-grid-image');
    expect(data.title).toBe('Gallery');
    expect(data.background).toBe(false);
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('Distinctio veritatis unde');
    expect(data.grid[0].srcImg).toBe('a.svg');
    expect(data.grid[0].altText).toBe('alText');
  });
});
