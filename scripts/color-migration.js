#!/usr/bin/env node

/**
 * Color Migration Helper Script
 * 
 * This script helps identify hardcoded colors in the codebase that can be
 * migrated to use the centralized color system.
 * 
 * Usage: node scripts/color-migration.js
 */

const fs = require('fs');
const path = require('path');

// Color mappings from hardcoded to centralized colors
const colorMappings = {
  '#111827': 'bg-background-primary',
  '#1F2937': 'bg-background-secondary or border-border-primary',
  '#374151': 'bg-background-tertiary or border-border-secondary',
  '#762A45': 'bg-accent-purple',
  '#FFA844': 'gradient-start',
  '#FF6D68': 'gradient-end',
  '#CE2D52': 'primary-500',
  '#F05921': 'secondary-500',
  '#00B900': 'success-500',
  '#52B447': 'successAlt-500',
  '#5088FF': 'accent-blue',
  '#9CA3AF': 'text-text-secondary',
  '#6B7280': 'text-text-muted or border-border-muted',
  '#ffffff': 'text-text-primary',
  'white': 'text-text-primary',
  'gray-400': 'text-text-secondary',
  'gray-500': 'text-text-muted',
  'gray-700': 'border-border-secondary',
};

function findHardcodedColors(dir) {
  const results = [];
  
  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        const content = fs.readFileSync(filePath, 'utf8');
        const lines = content.split('\n');
        
        lines.forEach((line, index) => {
          // Look for hardcoded hex colors
          const hexMatches = line.match(/#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}/g);
          if (hexMatches) {
            hexMatches.forEach(match => {
              results.push({
                file: filePath,
                line: index + 1,
                color: match,
                suggestion: colorMappings[match] || 'Define in tailwind.config.ts',
                context: line.trim()
              });
            });
          }
          
          // Look for common Tailwind color classes that could be centralized
          const tailwindMatches = line.match(/\b(text-white|text-gray-\d+|bg-gray-\d+|border-gray-\d+)\b/g);
          if (tailwindMatches) {
            tailwindMatches.forEach(match => {
              results.push({
                file: filePath,
                line: index + 1,
                color: match,
                suggestion: colorMappings[match] || 'Consider using centralized color',
                context: line.trim()
              });
            });
          }
        });
      }
    }
  }
  
  scanDirectory(dir);
  return results;
}

function generateReport(results) {
  console.log('🎨 Color Migration Report\n');
  console.log('=' .repeat(50));
  
  if (results.length === 0) {
    console.log('✅ No hardcoded colors found! Your codebase is using the centralized color system.');
    return;
  }
  
  console.log(`Found ${results.length} potential color migrations:\n`);
  
  // Group by file
  const groupedResults = results.reduce((acc, result) => {
    if (!acc[result.file]) {
      acc[result.file] = [];
    }
    acc[result.file].push(result);
    return acc;
  }, {});
  
  Object.entries(groupedResults).forEach(([file, fileResults]) => {
    console.log(`📁 ${file}`);
    console.log('-'.repeat(file.length + 4));
    
    fileResults.forEach(result => {
      console.log(`  Line ${result.line}: ${result.color}`);
      console.log(`  Suggestion: ${result.suggestion}`);
      console.log(`  Context: ${result.context}`);
      console.log('');
    });
    
    console.log('');
  });
  
  console.log('💡 Migration Tips:');
  console.log('1. Replace hardcoded hex colors with centralized color classes');
  console.log('2. Use semantic color names (e.g., text-primary instead of text-white)');
  console.log('3. For SVG gradients, consider using CSS custom properties');
  console.log('4. Test color changes across different components');
  console.log('');
  console.log('📚 See COLOR_SYSTEM.md for complete documentation');
}

// Main execution
const srcDir = path.join(__dirname, '..', 'src');
const results = findHardcodedColors(srcDir);
generateReport(results);
