lrc = create a layout Root
```TSX
export default function Root NameLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Hello Root Layout Root Name</h1>
    </div>
  );
}
```
---
mr = create metadata
```TSX
export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};
```
