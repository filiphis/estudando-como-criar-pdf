/* eslint-disable new-cap */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import fs from 'fs';
import PDFDocument from 'pdfkit';

type textAlignProps = {
	textAlign: 'center' | 'left' | 'right' | 'justify' | undefined;
};

const width = 360;
const height = 1000;

const doc = new PDFDocument({
	size: [width, height],
	font: './src/assets/fonts/SharonSans-Regular.otf',
	margins: {
		top: 0,
		bottom: 0,
		left: 40,
		right: 40
	},
	
});

doc.pipe(fs.createWriteStream('pdfGerado.pdf'));
doc.fillColor('black').rect(0, 0, doc.page.width, doc.page.height).fill();

const MainTitle = (text: string) => {
	doc.fontSize(20).text(text, {
		align: 'center',
	});
};

const LeftTitle = (text: string) => {
	doc.fontSize(20).text(text, {
		align: 'left',
	});
};

// MainTitle('texto1');
doc.image('./src/assets/images/Header.png', 0, 15, {width: doc.page.width, height: 262})

// Doc.fontSize(12);
// doc.text('Testando DOC.text 2', 110, 140);
// MainTitle('texto2');
// LeftTitle('texto3');

doc.end();

console.log('executando...');
