// This layout will be valid for all the routes under the "drinks".

const DrinksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-xl'>
      <div className='mockup-code mb-8'>
        <pre data-prefix='$'>
          <code>pnpm create next-app</code>
        </pre>
      </div>
      {children}
    </div>
  );
};

export default DrinksLayout;
