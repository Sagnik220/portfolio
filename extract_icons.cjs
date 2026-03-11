const fs = require('fs');
const path = require('path');
const simpleIcons = require('simple-icons');

// In v13+, simpleIcons is exported directly as an object of icons
// The keys are usually 'si[Title]' eg 'siDatabricks' or 'siAmazonwebservices'

const titlesToExtract = [
    'Databricks',
    'Snowflake',
    'Apache Spark',
    'Apache Kafka',
    'Apache Flink',
    'Apache Hadoop',
    'Amazon Web Services',
    'Microsoft Azure',
    'Google Cloud',
    'Python',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'Microsoft SQL Server',
    'Kubernetes',
    'Docker',
    'Terraform',
    'Git',
    'GitHub',
    'Apache Airflow',
    'dbt'
];

const destDir = path.join(__dirname, 'public', 'icons');
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

titlesToExtract.forEach(title => {
    // Find the icon by title or by slug match in all exported objects
    const icon = Object.values(simpleIcons).find(
        i => i && (
            (i.title && i.title.toLowerCase() === title.toLowerCase()) ||
            (i.slug && i.slug.toLowerCase() === title.toLowerCase().replace(/ /g, ''))
        )
    );
    if (icon && icon.svg) {
        fs.writeFileSync(path.join(destDir, `${icon.slug}.svg`), icon.svg);
        console.log(`Saved ${title} as ${icon.slug}.svg`);
    } else {
        console.error(`Icon not found for: ${title}`);
    }
});
