import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Mail, 
  Phone, 
  User, 
  ArrowRight, 
  Check,
  X,
  Circle
} from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const NewItemCard = ({ 
  item, 
  claimStatus = 'unclaimed',
  onClaimClick 
}) => {
  const [expanded, setExpanded] = useState(false);
  
  const getStatusStyles = (status) => {
    switch(status) {
      case 'approved':
        return {
          bg: 'bg-green-100 hover:bg-green-200',
          text: 'text-green-800',
          icon: <Check className="mr-1 h-3 w-3" />
        };
      case 'pending':
        return {
          bg: 'bg-amber-100 hover:bg-amber-200',
          text: 'text-amber-800',
          icon: <Circle className="mr-1 h-3 w-3" />
        };
      default:
        return {
          bg: 'bg-zinc-100 hover:bg-zinc-200',
          text: 'text-zinc-800',
          icon: <X className="mr-1 h-3 w-3" />
        };
    }
  };

  const getTypeStyles = (type) => {
    return type === 'LostItem'
      ? 'bg-red-600 hover:bg-red-700 text-white'
      : 'bg-emerald-600 hover:bg-emerald-700 text-white';
  };

  const status = getStatusStyles(claimStatus);
  const formattedDate = new Date(item.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <Card className="w-full max-w-sm overflow-hidden transition-all duration-300 hover:shadow-lg relative group p-0">
      <div className="absolute top-3 left-3 z-10">
        <Badge 
          className={cn(
            "shadow-sm transition-all duration-200",
            getTypeStyles(item.itemType)
          )}
        >
          {item.itemType === 'LostItem' ? 'Lost Item' : 'Found Item'}
        </Badge>
      </div>
      
      {claimStatus && (
        <div className="absolute top-3 right-3 z-10">
          <Badge 
            className={cn(
              "cursor-pointer shadow-sm transition-all duration-200",
              status.bg,
              status.text
            )}
            onClick={onClaimClick}
          >
            {status.icon}
            {claimStatus === 'approved' ? 'Claimed' : 
             claimStatus === 'pending' ? 'Pending Claim' : 
             'Unclaimed'}
          </Badge>
        </div>
      )}
      
      {item.imageUrl && (
        <div className="relative p-0 m-0">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="object-cover w-full h-full rounded-t-lg transition-transform duration-300 group-hover:scale-[1.02]" 
            />
          </AspectRatio>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-lg" />
        </div>
      )}
      
      <CardHeader className={item.imageUrl ? "pb-2" : "pt-10 pb-2"}>
        <h2 className="text-xl font-bold tracking-tight">{item.title}</h2>
      </CardHeader>
      
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
        
        <div className="flex items-center text-sm">
          <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{item.location}</span>
        </div>
        
        <div className="flex items-center text-sm">
          <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
          <span>{formattedDate}</span>
        </div>
        
        <div className={cn(
          "space-y-3 overflow-hidden transition-all duration-300",
          expanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}>
          <h3 className="text-sm font-semibold mt-4">Contact Information</h3>
          
          <div className="flex items-center text-sm">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{item.contactName}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{item.contactEmail}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{item.contactPhone}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end pt-0 pb-5">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setExpanded(!expanded)}
          className="text-xs group"
        >
          {expanded ? "Show Less" : "Contact Details"}
          <ArrowRight className={cn(
            "ml-1 h-3 w-3 transition-transform ",
            expanded ? "rotate-90" : "rotate-0"
          )} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewItemCard;