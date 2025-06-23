
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  TrendingUp, 
  Package, 
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // Mock data
  const stats = [
    { title: 'Total Sales', value: '2,450,000 FCFA', icon: DollarSign, change: '+12%' },
    { title: 'Orders', value: '145', icon: ShoppingBag, change: '+8%' },
    { title: 'Customers', value: '89', icon: Users, change: '+15%' },
    { title: 'Products', value: '47', icon: Package, change: '+3%' },
  ];

  const orders = [
    { id: 'ORD-001', customer: 'John Doe', total: '85,000 FCFA', status: 'Pending', date: '2024-01-15' },
    { id: 'ORD-002', customer: 'Marie Claire', total: '120,000 FCFA', status: 'Shipped', date: '2024-01-14' },
    { id: 'ORD-003', customer: 'Paul Tabi', total: '65,000 FCFA', status: 'Delivered', date: '2024-01-13' },
  ];

  const products = [
    { id: 'PROD-001', name: 'Hand-woven Bamboo Basket', price: '25,000 FCFA', stock: 12, status: 'Active' },
    { id: 'PROD-002', name: 'Traditional Indigo Fabric', price: '40,000 FCFA', stock: 8, status: 'Active' },
    { id: 'PROD-003', name: 'Carved Wooden Mask', price: '75,000 FCFA', stock: 3, status: 'Low Stock' },
  ];

  const customers = [
    { id: 'CUST-001', name: 'John Doe', email: 'john@example.com', orders: 3, total: '185,000 FCFA' },
    { id: 'CUST-002', name: 'Marie Claire', email: 'marie@example.com', orders: 1, total: '120,000 FCFA' },
    { id: 'CUST-003', name: 'Paul Tabi', email: 'paul@example.com', orders: 2, total: '90,000 FCFA' },
  ];

  const handleAction = (action: string, item?: any) => {
    toast({
      title: `${action} Action`,
      description: `${action} has been performed successfully.`,
    });
    console.log(`${action} performed on:`, item);
  };

  const getStatusBadge = (status: string) => {
    const variants: { [key: string]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
      'Pending': 'outline',
      'Shipped': 'secondary',
      'Delivered': 'default',
      'Active': 'default',
      'Low Stock': 'destructive',
    };
    
    return <Badge variant={variants[status] || 'outline'}>{status}</Badge>;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button className="bg-artisan-clay hover:bg-artisan-clay/90">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-green-600">{stat.change}</p>
              </div>
              <stat.icon className="h-8 w-8 text-artisan-clay" />
            </div>
          </Card>
        ))}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="orders" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Orders Tab */}
        <TabsContent value="orders">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.total}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell>{order.date}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleAction('View', order)}>
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleAction('Edit', order)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Products</h2>
              <Button className="bg-artisan-clay hover:bg-artisan-clay/90" onClick={() => handleAction('Add Product')}>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleAction('Edit', product)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleAction('Delete', product)}>
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* Customers Tab */}
        <TabsContent value="customers">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Customers</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell className="font-medium">{customer.id}</TableCell>
                    <TableCell>{customer.name}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                    <TableCell>{customer.orders}</TableCell>
                    <TableCell>{customer.total}</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" onClick={() => handleAction('View', customer)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Sales Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>This Month</span>
                  <span className="font-semibold">850,000 FCFA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Last Month</span>
                  <span className="font-semibold">720,000 FCFA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Growth</span>
                  <span className="font-semibold text-green-600">+18%</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Top Products</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Bamboo Basket</span>
                  <span>23 sold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Indigo Fabric</span>
                  <span>18 sold</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Wooden Mask</span>
                  <span>12 sold</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
