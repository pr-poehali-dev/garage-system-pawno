import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Garage {
  id: number;
  name: string;
  location: string;
  capacity: number;
  occupied: number;
  vehicles: Vehicle[];
}

interface Vehicle {
  id: number;
  model: string;
  plate: string;
  owner: string;
  parkedAt: string;
}

const Index = () => {
  const [selectedGarage, setSelectedGarage] = useState<Garage | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const garages: Garage[] = [
    {
      id: 1,
      name: 'Гараж №1',
      location: 'LS, Grove Street',
      capacity: 10,
      occupied: 7,
      vehicles: [
        { id: 1, model: 'Infernus', plate: 'LS-001', owner: 'John_Doe', parkedAt: '10:30' },
        { id: 2, model: 'Sultan', plate: 'LS-002', owner: 'Jane_Smith', parkedAt: '11:15' },
        { id: 3, model: 'Elegy', plate: 'LS-003', owner: 'Mike_Johnson', parkedAt: '12:00' },
        { id: 4, model: 'Turismo', plate: 'LS-004', owner: 'Sarah_Williams', parkedAt: '13:45' },
        { id: 5, model: 'Banshee', plate: 'LS-005', owner: 'Tom_Brown', parkedAt: '14:20' },
        { id: 6, model: 'Bullet', plate: 'LS-006', owner: 'Emma_Davis', parkedAt: '15:10' },
        { id: 7, model: 'Cheetah', plate: 'LS-007', owner: 'Alex_Wilson', parkedAt: '16:00' },
      ],
    },
    {
      id: 2,
      name: 'Гараж №2',
      location: 'LS, Downtown',
      capacity: 8,
      occupied: 3,
      vehicles: [
        { id: 8, model: 'ZR-350', plate: 'LS-008', owner: 'Chris_Moore', parkedAt: '09:00' },
        { id: 9, model: 'Jester', plate: 'LS-009', owner: 'Lisa_Taylor', parkedAt: '10:00' },
        { id: 10, model: 'Uranus', plate: 'LS-010', owner: 'David_Anderson', parkedAt: '11:00' },
      ],
    },
    {
      id: 3,
      name: 'Гараж №3',
      location: 'SF, Doherty',
      capacity: 12,
      occupied: 10,
      vehicles: [
        { id: 11, model: 'Flash', plate: 'SF-001', owner: 'Robert_Thomas', parkedAt: '08:30' },
        { id: 12, model: 'Stratum', plate: 'SF-002', owner: 'Mary_Jackson', parkedAt: '09:15' },
        { id: 13, model: 'Buffalo', plate: 'SF-003', owner: 'Paul_White', parkedAt: '10:45' },
        { id: 14, model: 'Phoenix', plate: 'SF-004', owner: 'Nancy_Harris', parkedAt: '11:30' },
        { id: 15, model: 'Super GT', plate: 'SF-005', owner: 'Kevin_Martin', parkedAt: '12:15' },
        { id: 16, model: 'Slamvan', plate: 'SF-006', owner: 'Betty_Thompson', parkedAt: '13:00' },
        { id: 17, model: 'Savanna', plate: 'SF-007', owner: 'George_Garcia', parkedAt: '14:00' },
        { id: 18, model: 'Remington', plate: 'SF-008', owner: 'Susan_Martinez', parkedAt: '15:00' },
        { id: 19, model: 'Blade', plate: 'SF-009', owner: 'Richard_Robinson', parkedAt: '16:00' },
        { id: 20, model: 'Tornado', plate: 'SF-010', owner: 'Karen_Clark', parkedAt: '17:00' },
      ],
    },
  ];

  const totalCapacity = garages.reduce((sum, g) => sum + g.capacity, 0);
  const totalOccupied = garages.reduce((sum, g) => sum + g.occupied, 0);
  const totalFree = totalCapacity - totalOccupied;

  const handleGarageClick = (garage: Garage) => {
    setSelectedGarage(garage);
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between animate-fade-in">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-card-foreground">Система Гаражей</h1>
            <p className="text-muted-foreground mt-1">Управление парковочными местами</p>
          </div>
          <Icon name="Warehouse" size={40} className="text-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Всего мест</p>
                <p className="text-3xl font-bold text-card-foreground mt-1">{totalCapacity}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="LayoutGrid" size={24} className="text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Занято</p>
                <p className="text-3xl font-bold text-card-foreground mt-1">{totalOccupied}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Icon name="Car" size={24} className="text-accent" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Свободно</p>
                <p className="text-3xl font-bold text-card-foreground mt-1">{totalFree}</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center">
                <Icon name="ParkingSquare" size={24} className="text-green-500" />
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-card-foreground">Активные гаражи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {garages.map((garage, index) => {
              const freeSpaces = garage.capacity - garage.occupied;
              const occupancyPercent = Math.round((garage.occupied / garage.capacity) * 100);
              const isAlmostFull = occupancyPercent >= 80;

              return (
                <Card
                  key={garage.id}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-all cursor-pointer hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleGarageClick(garage)}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-card-foreground">{garage.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <Icon name="MapPin" size={14} />
                          {garage.location}
                        </p>
                      </div>
                      <Badge variant={isAlmostFull ? 'destructive' : 'default'} className="ml-2">
                        {occupancyPercent}%
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Занято:</span>
                        <span className="text-card-foreground font-medium">
                          {garage.occupied} / {garage.capacity}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full transition-all ${
                            isAlmostFull ? 'bg-destructive' : 'bg-primary'
                          }`}
                          style={{ width: `${occupancyPercent}%` }}
                        />
                      </div>
                      <div className="flex items-center gap-2 pt-2">
                        <Icon name="CheckCircle2" size={16} className="text-green-500" />
                        <span className="text-sm text-muted-foreground">
                          {freeSpaces} {freeSpaces === 1 ? 'место свободно' : 'мест свободно'}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full" variant="outline">
                      <Icon name="Eye" size={16} className="mr-2" />
                      Просмотреть
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-card-foreground">
              {selectedGarage?.name}
            </DialogTitle>
            <DialogDescription className="flex items-center gap-1 text-muted-foreground">
              <Icon name="MapPin" size={14} />
              {selectedGarage?.location}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Вместимость</p>
                <p className="text-2xl font-bold text-card-foreground">{selectedGarage?.capacity}</p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Свободно</p>
                <p className="text-2xl font-bold text-green-500">
                  {selectedGarage ? selectedGarage.capacity - selectedGarage.occupied : 0}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-3">
                Припаркованный транспорт
              </h3>
              <div className="space-y-2">
                {selectedGarage?.vehicles.map((vehicle) => (
                  <Card
                    key={vehicle.id}
                    className="p-4 bg-muted border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon name="Car" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-card-foreground">{vehicle.model}</p>
                          <p className="text-sm text-muted-foreground">{vehicle.plate}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Владелец</p>
                        <p className="text-sm font-medium text-card-foreground">{vehicle.owner}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">Время</p>
                        <p className="text-sm font-medium text-card-foreground">{vehicle.parkedAt}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex gap-2 pt-4">
              <Button className="flex-1" variant="outline" onClick={() => setDialogOpen(false)}>
                Закрыть
              </Button>
              <Button className="flex-1">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить авто
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
