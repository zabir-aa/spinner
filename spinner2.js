for (let i = 0; i < 20; i++) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i * 800 + 100);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, i * 800 + 300);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i * 800 + 500);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, i * 800 + 700);
};